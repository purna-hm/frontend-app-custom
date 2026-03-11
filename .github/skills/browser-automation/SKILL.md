---
name: Browser Automation
description: Core browser automation functions for handling dev servers, wait-states, rendering states, and screenshot capturing using Playwright execution scripts natively.
version: "1.0"
---

# Browser Automation Usage Setup

1. Wait internally inside the project framework config scripts:
```bash
npx playwright install chromium
```
2. Dynamic temporary script generation for route hits (Transient Execution):
```javascript
import { chromium } from 'playwright';
(async () => {
   const browser = await chromium.launch();
   const page = await browser.newPage({ screen: {width: 1440, height: 900 }}); // Or mobile configuration
   await page.goto(process.env.TARGET_URL, { waitUntil: 'networkidle' });
   await page.evaluate(() => document.fonts.ready);
   await page.screenshot({ path: process.env.OUTPUT_PATH, fullPage: true });
   await browser.close();
})();
```