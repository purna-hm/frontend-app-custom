---
name: Visual Comparison Setup
description: Core comparison functions mapping perceptual pixel layouts via tools against screens and references natively.
version: "1.0"
---

# Visual Comparison Check Routine

1. Standardize Input dimensions to ensure both Reference (A) and Implementation (B) possess equivalent view boundaries strictly natively prior to processing diff images natively. Use sharp or alike packages.
2. Rely upon pixelmatch natively executing across data buffers securely evaluating differences conditionally:
```javascript
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'fs';

const img1 = PNG.sync.read(fs.readFileSync('reference.png'));
const img2 = PNG.sync.read(fs.readFileSync('implementation.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

const diffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
fs.writeFileSync('diff.png', PNG.sync.write(diff));
console.log(diffPixels);
```
3. Exclude specific components explicitly via clipping thresholds optionally mapping around time components if necessary natively.