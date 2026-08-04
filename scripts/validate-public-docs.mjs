#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');

const requiredFields = [
  'title',
  'summary',
  'owner',
  'registry_id',
  'claim_class',
  'implementation_status',
  'canonical_status',
  'public_visibility',
  'source_links',
  'last_reviewed',
  'known_limitations',
];

const allowedClaimClasses = new Set([
  'ETHICAL LAW',
  'ENGINEERING REQUIREMENT',
  'MYTHOS / INTERPRETIVE LANGUAGE',
  'HYPOTHESIS',
  'EMPIRICAL EVIDENCE',
]);

const allowedImplementationStatuses = new Set([
  'VISION',
  'HISTORICAL CONCEPT',
  'DRAFT',
  'SPECIFICATION',
  'STATIC PROTOTYPE',
  'FUNCTIONAL PROOF',
  'LIVE SHADOW RUNTIME',
  'PILOT',
  'PRODUCTION',
  'DEPRECATED',
]);

const allowedCanonicalStatuses = new Set([
  'draft',
  'candidate',
  'ratified',
  'superseded',
  'historical',
]);

const allowedVisibility = new Set(['public', 'restricted', 'private']);

async function collectMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'templates') continue;
      files.push(...(await collectMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseFrontmatter(source, relativePath) {
  if (!source.startsWith('---\n')) {
    throw new Error(`${relativePath}: missing YAML frontmatter`);
  }

  const closing = source.indexOf('\n---\n', 4);
  if (closing === -1) {
    throw new Error(`${relativePath}: frontmatter is not closed`);
  }

  const block = source.slice(4, closing);
  const metadata = new Map();
  let activeList = null;

  for (const rawLine of block.split('\n')) {
    const line = rawLine.trimEnd();

    if (/^\s+-\s+/.test(rawLine) && activeList) {
      const value = rawLine.replace(/^\s+-\s+/, '').trim();
      metadata.get(activeList).push(value);
      continue;
    }

    const match = line.match(/^([A-Za-z0-9_]+):(?:\s*(.*))?$/);
    if (!match) continue;

    const [, key, rawValue = ''] = match;
    const value = rawValue.trim();

    if (value === '[]') {
      metadata.set(key, []);
      activeList = key;
    } else if (value === '') {
      metadata.set(key, []);
      activeList = key;
    } else {
      metadata.set(key, value.replace(/^['"]|['"]$/g, ''));
      activeList = null;
    }
  }

  return metadata;
}

function ensureString(metadata, field, relativePath) {
  const value = metadata.get(field);
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${relativePath}: ${field} must be a non-empty scalar`);
  }
  return value.trim();
}

function validateMetadata(metadata, relativePath) {
  const errors = [];

  for (const field of requiredFields) {
    if (!metadata.has(field)) {
      errors.push(`${relativePath}: missing required field ${field}`);
    }
  }

  if (errors.length) return errors;

  for (const field of ['title', 'summary', 'owner', 'registry_id', 'last_reviewed']) {
    try {
      ensureString(metadata, field, relativePath);
    } catch (error) {
      errors.push(error.message);
    }
  }

  const claimClass = metadata.get('claim_class');
  if (!allowedClaimClasses.has(claimClass)) {
    errors.push(`${relativePath}: invalid claim_class ${JSON.stringify(claimClass)}`);
  }

  const status = metadata.get('implementation_status');
  if (!allowedImplementationStatuses.has(status)) {
    errors.push(`${relativePath}: invalid implementation_status ${JSON.stringify(status)}`);
  }

  const canonicalStatus = metadata.get('canonical_status');
  if (!allowedCanonicalStatuses.has(canonicalStatus)) {
    errors.push(`${relativePath}: invalid canonical_status ${JSON.stringify(canonicalStatus)}`);
  }

  const visibility = metadata.get('public_visibility');
  if (!allowedVisibility.has(visibility)) {
    errors.push(`${relativePath}: invalid public_visibility ${JSON.stringify(visibility)}`);
  }

  const sourceLinks = metadata.get('source_links');
  if (!Array.isArray(sourceLinks) || sourceLinks.length === 0) {
    errors.push(`${relativePath}: source_links must contain at least one provenance reference`);
  }

  const limitations = metadata.get('known_limitations');
  if (!Array.isArray(limitations) || limitations.length === 0) {
    errors.push(`${relativePath}: known_limitations must contain at least one explicit limitation`);
  }

  const reviewed = metadata.get('last_reviewed');
  if (typeof reviewed === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(reviewed)) {
    errors.push(`${relativePath}: last_reviewed must use YYYY-MM-DD`);
  }

  return errors;
}

function validateContent(source, metadata, relativePath) {
  const errors = [];
  const lower = source.toLowerCase();
  const status = metadata.get('implementation_status');

  if (!lower.includes('known limitation') && !lower.includes('limitation')) {
    errors.push(`${relativePath}: body must explain limitations, not only list them in frontmatter`);
  }

  if (lower.includes('powercoin') && !lower.includes('historical')) {
    errors.push(`${relativePath}: POWERcoin appears without a historical-status explanation`);
  }

  if (lower.includes('ethical data marketplace') && !lower.includes('historical')) {
    errors.push(`${relativePath}: Ethical Data Marketplace appears without a historical-status explanation`);
  }

  const d1AuditBoundary = /not\s+(?:an\s+)?(?:independent\s+)?audit/i;
  if (lower.includes('tier d1') && !d1AuditBoundary.test(source)) {
    errors.push(`${relativePath}: UDS Tier D1 must state that it is not an audit`);
  }

  if (lower.includes('human sarah') && !lower.includes('sarah ai')) {
    errors.push(`${relativePath}: Human Sarah references must preserve the Sarah AI distinction`);
  }

  if (status === 'PRODUCTION' && !lower.includes('security')) {
    errors.push(`${relativePath}: production status requires a visible security discussion`);
  }

  return errors;
}

async function main() {
  const files = await collectMarkdownFiles(DOCS_DIR);
  const errors = [];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const relativePath = path.relative(ROOT, file);

    try {
      const metadata = parseFrontmatter(source, relativePath);
      errors.push(...validateMetadata(metadata, relativePath));
      errors.push(...validateContent(source, metadata, relativePath));
    } catch (error) {
      errors.push(error.message);
    }
  }

  if (errors.length > 0) {
    console.error('Public documentation validation failed:\n');
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Validated ${files.length} public documentation files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
