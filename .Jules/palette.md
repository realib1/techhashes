
## 2024-05-24 - Missing ARIA Labels on Icon-only Links
**Learning:** In portfolio or link aggregators (like this one), we often see `.social__icon` or `.social-links` sections containing multiple `<a>` elements wrapping Font Awesome icons. Without `aria-label`s, screen readers announce nothing useful for these links.
**Action:** Always check social icon sections. If an `<a>` or `<button>` contains only an icon (`<i>`, `<svg>`, etc.) and no visible text, it must have a descriptive `aria-label` indicating its destination or action.
