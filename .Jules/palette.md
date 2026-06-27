## 2024-05-19 - Ensure ID uniqueness when cloning HTML elements
**Learning:** Found a duplicate ID (`profile-link`) resulting from header/footer duplication. Accessibility tools and standard DOM manipulation expect IDs to be unique.
**Action:** When evaluating existing HTML structure for accessibility or fixing issues on elements that appear in multiple places (like social links in headers/footers), always verify that they use unique IDs (e.g., append `-footer`) rather than sharing an ID.
