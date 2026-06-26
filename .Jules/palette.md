## 2024-06-26 - Icon Links Accessibility Pattern
**Learning:** This app heavily uses FontAwesome icons wrapped in empty <a> tags for social links, completely missing accessible names for screen readers.
**Action:** Always verify icon-only interactive elements in this codebase. Add `aria-label` to the interactive wrapper (e.g., the <a> or <button>) and `aria-hidden="true"` to the purely decorative icon element (e.g., the <i> tag) to ensure screen readers announce the intent without redundancy.
