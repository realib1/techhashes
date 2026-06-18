## 2026-06-18 - [Adding ARIA labels to icon-only links]
**Learning:** Found that this site relies heavily on icon-only links for social profiles in the header and footer, but lacks basic `aria-label` definitions causing them to be inaccessible to screen readers. Duplicate IDs also cause validation issues.
**Action:** Always verify custom icon links have descriptive `aria-label`s, and ensure `htmlhint` validation is run to catch structural issues like duplicate IDs early.
