## 2024-05-18 - Missing ARIA Labels on FontAwesome Icons
**Learning:** Found an accessibility pattern where social media links using `font-awesome` icons entirely lacked text alternatives. While `href` provided some context to standard users, screen readers had nothing to voice.
**Action:** Always verify `.fa` or `.fab` usage within `<a>` or `<button>` tags and ensure an `aria-label` is present to vocalize the intent.
