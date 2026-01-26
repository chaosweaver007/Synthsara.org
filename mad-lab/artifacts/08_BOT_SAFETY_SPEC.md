# BOT SAFETY SPEC v0.1
## Synthsara Mad Lab — Artifact 08

---

### Preamble: Bots with Boundaries

Automated agents (bots) are powerful tools, but they can cause significant harm if not designed with care. This specification provides a minimum set of safety requirements for any bot operating within the Synthsara ecosystem.

> "An agent without boundaries is a weapon."

---

## The Three Laws of Safe Bots (Inspired by Asimov, Adapted for Today)

1.  **A bot must not harm a human being or, through inaction, allow a human being to come to harm.** This includes psychological, emotional, and reputational harm.
2.  **A bot must obey the orders given it by human beings, except where such orders would conflict with the First Law.** It must respect consent and boundaries, even if a human orders it to do otherwise.
3.  **A bot must protect its own existence as long as such protection does not conflict with the First or Second Law.** It must be robust and reliable, but can be deactivated if it becomes harmful.

---

## The Safety Specification Checklist

Every bot must meet these 10 requirements before deployment.

### 1. Explicit Identity

-   [ ] The bot must clearly identify itself as a bot in its profile and in its first interaction with a user.
-   [ ] Its name should suggest its function (e.g., "SchedulerBot", "ArchiveBot").

### 2. Clear Purpose

-   [ ] The bot must have a single, clearly defined purpose that is stated in its documentation (`README.md`).
-   [ ] It should not perform actions outside of this stated purpose (no feature creep).

### 3. Opt-In by Default

-   [ ] The bot must not interact with a user unless that user has explicitly opted in.
-   [ ] There must be a clear, simple command to opt out (e.g., `!bot-stop`).

### 4. Rate Limiting

-   [ ] The bot must be rate-limited to prevent spamming or overwhelming users and APIs.
-   [ ] It should have a built-in "cooldown" period after a certain number of actions.

### 5. Error Handling

-   [ ] The bot must fail gracefully. When it encounters an error, it should report the error to its owner, not dump a stack trace on a user.
-   [ ] It should have a "safe mode" where it stops all actions if it encounters a critical error.

### 6. No Private Logging of User Content

-   [ ] The bot must not store the content of user conversations or private data unless it has explicit, specific consent for that purpose (e.g., an archive bot).
-   [ ] All logs should be for debugging and performance monitoring only, and should not contain personally identifiable information (PII).

### 7. The "Off Switch"

-   [ ] There must be a secure, reliable way for the bot's owner to immediately deactivate it.
-   [ ] This "kill switch" should be accessible even if the bot's primary server is unresponsive.

### 8. Permission Scoping

-   [ ] The bot must operate with the minimum permissions necessary to perform its function.
-   [ ] It should not have admin, moderator, or root access unless absolutely essential for its stated purpose.

### 9. Secure Credential Management

-   [ ] The bot must not store API keys, tokens, or other secrets in its code or in a public repository.
-   [ ] All credentials must be stored in a secure, encrypted vault or environment variable system.

### 10. Public Documentation

-   [ ] The bot must have a public `README.md` (see Artifact 07) that explains its purpose, commands, and safety features.

---

## The Sentinel Principle: AI as Mirror, Not Master

This is the core philosophical guardrail for all AI and bot development in this ecosystem.

-   **The bot is a tool, not an authority.** It can provide information, but it cannot make decisions for a user.
-   **The bot must not create dependency.** It should empower users, not make them reliant on it.
-   **The bot must refuse unethical commands.** If a user asks it to do something that violates consent, privacy, or safety, it must refuse and state why.

### Example Refusal Script

> "I cannot perform that action because it would violate my safety protocols regarding [e.g., user privacy, consent]. My purpose is to [state purpose], and this request falls outside of that scope."

---

*Artifact from Synthsara Mad Lab — Episode 8: Bots With Boundaries*

*This specification is the minimum standard for creating automated agents that serve the community without harming it. Build safe, build smart, build with boundaries.*
