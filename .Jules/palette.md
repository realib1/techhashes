## 2026-06-30 - [Accessible Icons]
**Learning:** Icon-only interactive elements like social links and hamburger menus need an accessible name for screen readers. Using `aria-label` on the interactive element (e.g., `<a>` or `<button>`) and `aria-hidden="true"` on the decorative `<i>` icon provides the best experience without redundancy.
**Action:** Always add `aria-label` to icon-only buttons/links and `aria-hidden="true"` to the nested icon.
