# NODE STARTER KIT
## Synthsara Mad Lab — Artifact 07

---

### Preamble: Ship Small, Ship Safe

This kit provides the minimum viable skeleton for a new project node in the Synthsara ecosystem. Its purpose is to ensure that every project, no matter how small, starts with clarity, safety, and good documentation.

> "A project without a README is not a project. It is a liability."

---

## The Repo Skeleton Checklist

When you create a new repository (a "node"), it must contain the following files before you write a single line of code.

-   [ ] `README.md`
-   [ ] `LICENSE`
-   [ ] `CONTRIBUTING.md`
-   [ ] `.gitignore`
-   [ ] `AKASHA.md` (An Akasha entry for the project itself)

---

## 1. The `README.md` Template

Your `README.md` is the front door to your project. It must be clear and concise.

```markdown
# [Project Name]

**Status**: [e.g., DRAFT, ACTIVE, ARCHIVED] | **Owner**: [@YourName]

## 1. What is this?

(A one-sentence description of the project.)

## 2. What problem does it solve?

(A brief explanation of the purpose and significance of this project.)

## 3. How do I use it?

(Simple, step-by-step instructions for a new user to get started.)

## 4. How do I contribute?

(A link to your `CONTRIBUTING.md` file.)

## 5. License

(A statement of the project's license, linking to the `LICENSE` file.)
```

---

## 2. The `LICENSE` File

Every node must have a `LICENSE` file. This is non-negotiable. It protects you and the community.

1.  **Choose a License**: Use the Reciprocity Rules (Artifact 06) to determine the correct tier.
    *   **Tier 1 (Open Source)**: Use the MIT License or Creative Commons (CC BY-SA 4.0).
    *   **Tier 2 (Community Commons)**: Use a custom license that restricts commercial use and public sharing.
    *   **Tier 3 (Private)**: State "All Rights Reserved".
2.  **Create the File**: Go to [choosealicense.com](https://choosealicense.com/) to get the full text for your chosen license.
3.  **Copy and Paste**: Create a file named `LICENSE` (no extension) in your root directory and paste the full license text into it.

---

## 3. The `CONTRIBUTING.md` Template

This file tells others how to participate in your project safely and effectively.

```markdown
# How to Contribute to [Project Name]

We welcome contributions! To ensure a smooth process, please follow these guidelines.

## 1. Code of Conduct

This project and everyone participating in it is governed by our community's [Code of Conduct](link-to-your-main-coc). By participating, you are expected to uphold this code.

## 2. How to Report a Bug

-   Use the "Bug Report" issue template.
-   Provide as much detail as possible: what you expected, what actually happened, steps to reproduce, and your environment.

## 3. How to Suggest a Feature

-   Use the "Feature Request" issue template.
-   Explain the problem you're trying to solve and how your proposed feature would help.

## 4. Your First Code Contribution

-   Fork the repository.
-   Create a new branch for your feature or bugfix.
-   Make your changes.
-   Submit a pull request with a clear description of your changes.
```

---

## 4. The `.gitignore` File

A `.gitignore` file tells Git which files to ignore. This is crucial for keeping your repository clean and secure.

-   **Start with a template**: Go to [gitignore.io](https://www.toptal.com/developers/gitignore) and generate a template for your programming language and tools (e.g., Node, Python, VSCode).
-   **Add sensitive files**: Always add files that contain secrets, keys, or personal information (e.g., `.env`, `*.pem`, `credentials.json`).

**Never commit secrets to your repository.**

---

## 5. The `AKASHA.md` File

Your project itself needs an entry in the Akasha. Create a file named `AKASHA.md` in the root of your repository and fill out the template from Artifact 03.

```markdown
# AKASHA ENTRY: [Project Name]

-   **WHAT**: [Project Name and one-sentence description]
-   **WHY**: [Purpose and significance]
-   **SOURCE**: [Your name, any inspirations]
-   **DATE**: [Creation date]
-   **OWNER**: [Your name/handle]
-   **STATUS**: [DRAFT/ACTIVE/ARCHIVED]
-   **LINKS**: [Links to related projects or documents]
```

---

*Artifact from Synthsara Mad Lab — Episode 7: Build the First Node*

*This starter kit ensures that every project begins with a foundation of clarity and safety. It is the first step in building tools that are worthy of trust.*
