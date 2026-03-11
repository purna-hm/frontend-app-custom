---
name: visual-testing-conventions
description: "Knowledge: visual-testing-conventions"
version: "1.0"
---

# Visual Testing Conventions

## Supported Viewports
- **Mobile Strict**: 375px x 812px (Device: iPhone 13 mini roughly)
- **Tablet**: 768px x 1024px (Device: iPad Mini)
- **Desktop Edge**: 1024px x 768px
- **Desktop Main**: 1440px x 900px

## Naming Conventions
- Pattern: `{feature}-{route-slug}-{viewport}.png`
- Example: `auth-login-375x812.png`

## State Standardization
- Disable animations where possible before taking shots (`playwright: await page.emulateMedia({ reducedMotion: 'reduce' });`).
- Ensure fonts are fully loaded by using `document.fonts.ready`.
- Hide third party widgets (Intercom, Cookie Banners) conditionally.

## Diff Match Defaults
- Threshold: `0.1` perceptual.
- Ignore Anti-aliasing issues.
