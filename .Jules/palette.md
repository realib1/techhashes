## 2026-06-02 - Added missing ARIA labels to social icons and hamburger menu
**Learning:** Found multiple instances of icon-only links (e.g., FontAwesome icons inside anchor tags) lacking accessible names, along with an inaccessible hamburger menu div.
**Action:** Always verify that interactive elements like icon-only buttons or links have descriptive `aria-label` attributes and proper roles/tabindex if they are not native buttons/links.
