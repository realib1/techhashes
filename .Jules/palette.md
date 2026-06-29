## 2026-06-29 - Adding ARIA labels to social links
**Learning:** Icon-only social links need screen reader context (aria-labels) to be fully accessible. I also found that duplicate HTML IDs (like profile-link) are common copy-paste errors when building similar link clusters.
**Action:** When adding links in headers and footers, always check for duplicate IDs and ensure that icon-only links contain aria-label attributes.
