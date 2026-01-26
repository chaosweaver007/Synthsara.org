# LIBRARY TAXONOMY + FOLDER MAP
## Synthsara Mad Lab — Artifact 09

---

### Preamble: An Archive You Can Actually Use

A library without a system is just a pile of books. This document provides the shared taxonomy (how we tag things) and folder map (where we put things) for the Synthsara Akasha. Its purpose is to make information findable and to prevent the chaos of a thousand scattered files.

> "A good library is a living argument for a better world."

---

## Part 1: The Taxonomy (How We Tag)

Every entry in the Akasha must have at least one of each of the following three types of tags.

### 1. Type Tag (What is this?)

This tag describes the format or type of the content.

| Tag | Description |
|---|---|
| `type:text` | A written document, article, or post. |
| `type:image` | A static image, diagram, or photograph. |
| `type:audio` | An audio recording, podcast, or music track. |
| `type:video` | A video recording or animation. |
| `type:code` | A code repository, script, or snippet. |
| `type:artifact` | A downloadable tool or template from an episode. |
| `type:discussion` | A summary of a conversation or meeting. |

### 2. Status Tag (Where is this in its lifecycle?)

This tag describes the current state of the content.

| Tag | Description |
|---|---|
| `status:draft` | Work in progress, not ready for use. |
| `status:review` | Ready for feedback, not yet final. |
| `status:active` | Current, approved, and in use. |
| `status:archived` | No longer current, kept for historical reference. |
| `status:deprecated` | Replaced by a newer version. |
| `status:disputed` | The content's accuracy or ownership is contested. |

### 3. Topic Tag (What is this about?)

This tag describes the subject matter. You can have multiple topic tags.

**Core Topics:**
- `topic:governance`
- `topic:ethics`
- `topic:ai`
- `topic:systems-thinking`
- `topic:community`
- `topic:shadow-work`
- `topic:reciprocity`
- `topic:consent`

**Process Topics:**
- `topic:script`
- `topic:production`
- `topic:research`
- `topic:design`

### Example Tag Block

For the Bot Safety Spec artifact, the tags would be:

`type:artifact`
`status:active`
`topic:ai`
`topic:ethics`
`topic:safety`

---

## Part 2: The Folder Map (Where We Put Things)

This is the canonical folder structure for our shared repository (e.g., on GitHub or Google Drive). Sticking to this structure is not optional; it is how we prevent chaos.

```
/ (Root)
│
├── 00_INBOX/
│   (For new files that haven't been sorted yet. Should be cleared out regularly.)
│
├── 01_MAD_LAB_PRODUCTION/
│   │
│   ├── scripts/
│   │   ├── season-1/
│   │   └── season-2/
│   │
│   ├── artifacts/
│   │
│   ├── production-bible/
│   │
│   └── glossary/
│
├── 02_AKASHA_LIBRARY/
│   │
│   ├── governance/
│   ├── ethics/
│   ├── ai/
│   ├── systems-thinking/
│   ├── community/
│   └── research/
│
├── 03_PROJECTS/
│   │
│   ├── [project_name_a]/
│   └── [project_name_b]/
│
├── 04_MEETINGS_AND_DISCUSSIONS/
│   │
│   ├── [year]/
│   │   └── [month]/
│
└── 99_ARCHIVE/
    (For old projects and deprecated files. A one-way trip.)
```

### Folder Descriptions

-   **`00_INBOX`**: The digital dumping ground. If you don't have time to sort something, put it here. Someone (maybe you, later) should triage this folder weekly.
-   **`01_MAD_LAB_PRODUCTION`**: Everything directly related to producing the show. This is the heart of the operation.
-   **`02_AKASHA_LIBRARY`**: The main library of sorted, tagged knowledge. This is for finalized documents, not drafts.
-   **`03_PROJECTS`**: For specific, ongoing projects that have their own set of files.
-   **`04_MEETINGS_AND_DISCUSSIONS`**: Summaries and recordings of important conversations.
-   **`99_ARCHIVE`**: Where old files go to retire. Don't delete things; archive them. This preserves our history.

---

## The Cartographer's Rule

> "A piece of information that cannot be found is no different from a piece of information that does not exist."

**Your responsibility when creating a file:**
1.  Give it a clear, descriptive name.
2.  Put it in the right folder.
3.  Add the correct tags to its Akasha entry.

**Your responsibility when looking for a file:**
1.  Check the relevant folder first.
2.  Use the search function with the appropriate tags.
3.  If you still can't find it, ask for help.

---

*Artifact from Synthsara Mad Lab — Episode 9: The Akasha Library*

*This system turns a chaotic collection of files into a functional, shared brain. Use it, and we can all think together build something that lasts.*
