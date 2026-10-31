// RTME public drafting logic. This module performs no I/O and authorizes no real-world actions.
export const HORIZONS = ['7 days', '30 days', '90 days'];

export function validateManifest(input) {
  const errors = [];
  const goal = String(input?.goal ?? '').trim();
  const outcome = String(input?.outcome ?? '').trim();
  if (goal.length < 10 || goal.length > 240) errors.push('Describe the intention in 10–240 characters.');
  if (outcome.length < 8 || outcome.length > 240) errors.push('Define a measurable outcome in 8–240 characters.');
  if (!HORIZONS.includes(input?.horizon)) errors.push('Choose a supported planning horizon.');
  if (!input?.consent) errors.push('Consent to creating this local draft is required.');
  if (!input?.nonHarm) errors.push('Confirm that the plan must avoid foreseeable harm.');
  if (!input?.privacy) errors.push('Confirm that no one else’s private information will be shared without permission.');
  if (!input?.reversible) errors.push('Confirm that actions must remain optional and reversible.');
  return errors;
}

export function createManifestDraft(input, now = new Date().toISOString()) {
  const errors = validateManifest(input);
  if (errors.length) throw new Error(errors.join(' '));
  const goal = String(input.goal).trim();
  const outcome = String(input.outcome).trim();
  const stamp = new Date(now);
  if (Number.isNaN(stamp.getTime())) throw new Error('Invalid timestamp.');
  return {
    schema: 'synthsara.rtme.local-draft.v0.1',
    reference: 'RTME-DRAFT-' + stamp.toISOString().replace(/[^0-9]/g, ''),
    created_at: stamp.toISOString(),
    mode: 'LOCAL_DRAFT_ONLY',
    execution: 'NONE',
    claim_status: 'PROTOTYPE_NOT_DEPLOYED',
    witness_status: 'NOT_WRITTEN',
    authorization: { scope: 'create this local draft only', external_actions: false, revocable: true },
    intent: goal,
    horizon: input.horizon,
    success_criterion: outcome,
    ethics: {
      status: 'SELF_ATTESTED_PENDING_INDEPENDENT_REVIEW',
      non_harm: true,
      privacy: true,
      reversible: true,
      uds_certified: false,
    },
    phases: [
      {
        key: 3,
        name: 'Divine Chaos · Discover',
        steps: [
          'Describe why this matters and who could benefit from: ' + goal,
          'Identify existing skills, allies, tools and resources without assuming anyone’s consent.',
          'Record potential harms, affected people and unanswered questions before acting.',
        ],
      },
      {
        key: 6,
        name: 'Sacred Order · Structure',
        steps: [
          'Select one small, reversible step that can be completed within ' + input.horizon + '.',
          'Define the evidence needed to verify success: ' + outcome,
          'Request explicit permission from every participant and create a correction or exit path.',
        ],
      },
      {
        key: 9,
        name: 'Harmony · Reflect',
        steps: [
          'Run a limited trial only after any needed real-world authorization is separately obtained.',
          'Compare actual evidence against the success criterion; do not present intentions as outcomes.',
          'Invite feedback, document corrections and decide whether to revise, stop or propose a wider pilot.',
        ],
      },
    ],
    notices: [
      'This receipt is local planning data, not a signed Witness Ledger record.',
      'No AI, external service, transaction, governance vote or real-world action has been triggered.',
      'A checked safeguard is a self-attestation, not a completed UDS audit.',
    ],
  };
}
