---
name: Figma Design System Patterns
description: Knowledge for translating Figma design concepts to frontend code patterns.
version: 1
---

# Figma Design System → Code Translation Patterns

## Layout Translation

### Auto-Layout → CSS Flexbox/Grid
| Figma Property | CSS Equivalent |
|---------------|----------------|
| Layout direction: Horizontal | `flex-direction: row` |
| Layout direction: Vertical | `flex-direction: column` |
| Gap (spacing between items) | `gap: {value}px` |
| Padding (top, right, bottom, left) | `padding: {t}px {r}px {b}px {l}px` |
| Primary axis alignment: Center | `justify-content: center` |
| Counter axis alignment: Center | `align-items: center` |
| Primary axis alignment: Space between | `justify-content: space-between` |
| Wrap | `flex-wrap: wrap` |

### Sizing Modes
| Figma Mode | CSS Equivalent |
|-----------|----------------|
| Fixed width/height | `width: {n}px` / `height: {n}px` |
| Hug contents | `width: fit-content` / `height: auto` |
| Fill container | `flex: 1` or `width: 100%` |
| Min/Max constraints | `min-width`, `max-width`, `min-height`, `max-height` |

### Constraints (non-auto-layout)
| Figma Constraint | CSS Equivalent |
|-----------------|----------------|
| Left + Right | `position: absolute; left: {n}px; right: {n}px` |
| Center | `position: absolute; left: 50%; transform: translateX(-50%)` |
| Scale | `width: {n}%` |

> **Warning**: Absolute positioning from Figma constraints does NOT map well to responsive layouts. Prefer auto-layout frames and translate to Flexbox/Grid.

## Design Token Mapping

### Figma Variables → CSS Custom Properties
```
Figma: color/primary → CSS: --color-primary
Figma: color/surface/base → CSS: --color-surface-base
Figma: spacing/sm → CSS: --spacing-sm
Figma: typography/heading/lg/fontSize → CSS: --font-size-heading-lg
```

**Naming convention**: Replace `/` with `-`, prefix with category.

### Variable Modes → CSS Themes
Figma variable modes (e.g., Light, Dark) map to CSS scoped overrides:
```css
:root { --color-surface: #ffffff; }         /* Light mode (default) */
.dark { --color-surface: #1a1a2e; }         /* Dark mode */
[data-brand="acme"] { --color-primary: #ff6600; } /* Brand variant */
```

### Typography Scale
```
Figma text style → CSS class or custom property set:
  font-family → --font-family
  font-size → --font-size-{scale}
  font-weight → --font-weight-{name}
  line-height → --line-height-{scale}
  letter-spacing → --letter-spacing-{scale}
```

## Component Variant Mapping

### Figma Variants → Component Props
Figma components with variant properties map to typed props:

```
Figma: Button / variant=Primary, size=Large, state=Default
Code:  <Button variant="primary" size="lg" />
```

| Figma Variant Type | Code Prop Type |
|-------------------|----------------|
| Boolean (e.g., "Has Icon") | `hasIcon?: boolean` |
| Enum (e.g., "Size": Small/Medium/Large) | `size: 'sm' \| 'md' \| 'lg'` |
| Instance swap (e.g., "Icon") | `icon?: ReactNode` or `[icon]` template slot |

### Component Naming
Figma uses `/` as group separators:
```
Figma: "Button/Primary" → Code: <Button variant="primary" />
Figma: "Card/Product/Horizontal" → Code: <ProductCard layout="horizontal" />
Figma: "Icon/Arrow/Right" → Code: <ArrowRightIcon />
```

**Rule**: Figma group hierarchy should NOT create separate component files for each variant. Use a single component with variant props.

## Asset Handling

### Icons
- Export as SVG from Figma
- Optimize with SVGO before use
- Wrap in framework-specific icon component (React: `<SvgIcon>`, Angular: `mat-icon` with custom SVG)

### Images
- Export at 2x scale for retina
- Use responsive image patterns (`srcSet`, `next/image`, Angular `NgOptimizedImage`)
- Prefer WebP/AVIF format for production

### Illustrations
- Export as SVG if vector, PNG @2x if raster
- Consider lazy loading for large illustrations

## Common Anti-Patterns

### ❌ 1:1 Frame-to-Component Mapping
Not every Figma frame should be a component. Only Figma "Component" instances should map to code components. Regular frames are just layout containers (divs).

### ❌ Pixel-Perfect Absolute Positioning
Never translate Figma absolute coordinates directly to CSS `position: absolute`. Always use Flexbox/Grid to achieve the layout responsively.

### ❌ Hardcoded Colors/Sizes
Never use raw hex values or pixel sizes from Figma in code. Always map through design tokens / CSS custom properties.

### ❌ Ignoring Responsive Behavior
Figma designs are typically static at one breakpoint. Always ask: "How should this adapt for mobile/tablet?" and design responsive CSS accordingly.

### ❌ Over-Component-izing
If a Figma component is only used once and has no variants, it may not need to be a separate code component. Use inline markup instead.