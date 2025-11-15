# UX Improvements - Visual Reference Guide

## Color Palette

### Primary Colors
- **Primary (Maroon):** `#7b2e2e` - Main CTAs, links, accents
- **Primary Hover:** `#610b0b` - Hover state, darker version
- **Primary Light:** `#a8433d` - Light accents, badges

### Accent Colors
- **Accent (Orange):** `#ff7a18` - Highlights, secondary CTAs
- **Accent Hover:** `#e66a05` - Darker orange on hover

### Neutral Colors
- **Background:** `#f7f8fb` - Very light page background
- **Card:** `#ffffff` - White cards
- **Text Primary:** `#0f172a` - Dark headings/body text
- **Text Secondary:** `#475569` - Medium grey text
- **Text Muted:** `#6b7280` - Light grey metadata
- **Border:** `rgba(15, 23, 42, 0.08)` - Subtle borders

### Contrast Ratios (WCAG AA Compliant)
| Text | Background | Ratio | Level |
|------|-----------|-------|-------|
| #0f172a (primary text) | #ffffff (card) | 17.5:1 | AAA |
| #475569 (secondary text) | #ffffff (card) | 7.3:1 | AA |
| #7b2e2e (link) | #ffffff (card) | 7.1:1 | AA |
| #ffffff (white) | #7b2e2e (button) | 9.5:1 | AAA |

---

## Spacing Scale

All spacing uses a 4px base unit for consistency:

```
--space-1: 4px    (used for tiny gaps)
--space-2: 8px    (small padding, gaps)
--space-3: 12px   (standard padding)
--space-4: 16px   (standard margin, padding)
--space-5: 20px   (card padding, gaps)
--space-6: 24px   (section spacing)
--space-7: 32px   (large section padding)
--space-8: 40px   (hero spacing)
```

### Examples
- Card padding: `--space-5` (20px)
- Margin between cards: `--space-5` (20px)
- Small button padding: `--space-3` + `--space-4` (horizontal)
- Gallery gap: `--space-2` (8px)

---

## Typography Scale

### Mobile (default, 16px base)
```
h2:      1.5rem    (24px)
h3:      1.125rem  (18px)
body:    0.95rem   (~15px)
small:   0.875rem  (14px)
line-height: 1.6
```

### Desktop (min-width: 768px)
```
h2:      1.75rem   (28px)
h3:      1.3rem    (21px)
body:    1rem      (16px)
small:   0.875rem  (14px)
line-height: 1.6
```

---

## Shadow System (3D Depth)

```css
--shadow-sm:   0 2px 4px rgba(16, 24, 40, 0.04)
--shadow-md:   0 4px 12px rgba(16, 24, 40, 0.06)
--shadow-lg:   0 6px 18px rgba(50, 50, 93, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)
--shadow-xl:   0 12px 32px rgba(50, 50, 93, 0.12)
--shadow-inner: inset 0 1px 2px rgba(0, 0, 0, 0.04)
```

### Usage
- **Buttons, badges:** `--shadow-sm`
- **Cards (default):** `--shadow-lg`
- **Cards (hover):** `--shadow-xl`
- **Dropdowns, modals:** `--shadow-xl`
- **Active pressed state:** `--shadow-sm`

---

## Border Radius

```css
--radius-sm: 6px    (small buttons, badges, thumbnails)
--radius-md: 10px   (search inputs, gallery controls)
--radius-lg: 12px   (cards)
--radius-xl: 16px   (large modals, feature sections)
```

---

## Component Styling

### Cards
- **Default shadow:** `var(--shadow-lg)` (6px 18px)
- **Hover shadow:** `var(--shadow-xl)` (12px 32px)
- **Border radius:** `var(--radius-lg)` (12px)
- **Padding:** `var(--space-5)` (20px)
- **Border:** 1px solid `var(--border)` (rgba)
- **Hover transform:** `translateY(-8px)`
- **Transition:** 220ms cubic-bezier(0.2, 0.9, 0.2, 1)

### Buttons (Video Button)
- **Width (mobile):** 100% (full-width)
- **Width (desktop):** auto (inline-block)
- **Padding:** 16px 20px (mobile), 12px 20px (desktop)
- **Border radius:** `var(--radius-md)` (10px)
- **Background:** Linear gradient (primary to darker)
- **Hover transform:** `translateY(-2px)`
- **Focus outline:** 3px solid rgba(123, 46, 46, 0.2)

### Gallery
- **Scroll type (mobile):** Horizontal with snap points
- **Thumbnail height:** 100px (mobile), 140px (desktop)
- **Thumbnail min-width:** 140px
- **Gap between items:** `var(--space-2)` (8px)
- **Border radius:** `var(--radius-sm)` (6px)
- **Hover transform:** `scale(1.05)`

### Badges
- **Padding:** 4px 12px
- **Font size:** 0.75rem (12px)
- **Font weight:** 600
- **Text transform:** uppercase
- **Border radius:** 999px (pill shape)
- **Background:** Linear gradient with rgba colors
- **Border:** 1px solid rgba primary

---

## Responsive Breakpoints

```css
/* Mobile-first (base styles apply to ≤ 768px) */

@media (min-width: 640px) {
  /* Tablet layout adjustments */
}

@media (min-width: 768px) {
  /* Large tablet / desktop adjustments */
}

@media (min-width: 1024px) {
  /* Large desktop adjustments */
}
```

### Layout Changes by Breakpoint

| Breakpoint | Cards Grid | Video Button | Typography | Padding |
|-----------|-----------|--------------|-----------|---------|
| ≤640px | 1 column | Full-width | Mobile scale | 12px |
| 640-768px | 2 columns | Full-width | Mobile scale | 16px |
| 768-1024px | 2 columns | Inline | Desktop scale | 16px |
| ≥1024px | 3 columns | Inline | Desktop scale | 20px |

---

## Accessibility Features

### Focus States
All interactive elements have visible focus states:
```css
:focus {
  outline: 3px solid rgba(123, 46, 46, 0.2);
  outline-offset: 2px;
}
```

### Reduced Motion Support
Users with "Reduce motion" OS setting will see:
- No animations (fade-in becomes instant)
- No transitions (smooth scroll becomes auto)
- Instant state changes

```css
@media (prefers-reduced-motion: reduce) {
  transition-duration: 0.01ms !important;
  animation-duration: 0.01ms !important;
}
```

### Color Contrast
All text meets WCAG AA standards (minimum 4.5:1 ratio)

### Keyboard Navigation
- Tab/Shift+Tab to navigate
- Enter to activate buttons
- Arrow keys in galleries
- Esc to close modals

---

## Transition Timing

```css
--duration-fast:   0.15s
--duration-normal: 0.22s
--duration-slow:   0.3s
--ease-smooth:     cubic-bezier(0.2, 0.9, 0.2, 1)
```

### Usage Examples
- **Card hover:** `0.22s cubic-bezier(0.2, 0.9, 0.2, 1)` (smooth spring)
- **Button hover:** `0.15s ease` (snappy)
- **Fade transitions:** `0.3s ease` (relaxed)

---

## Dark Mode Variables (Ready to Activate)

When dark mode is enabled via `@media (prefers-color-scheme: dark)`:

```css
:root {
  --bg: #0f172a;
  --bg-muted: #1a202c;
  --card: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --border: rgba(251, 252, 253, 0.1);
  --divider: rgba(251, 252, 253, 0.05);
}
```

---

## Quick Customization Guide

### Change Primary Color
Edit in `styles/ux-improvements.css` `:root`:
```css
--primary: #your-color;        /* Main color */
--primary-hover: #your-darker; /* Hover state */
--primary-light: #your-lighter; /* Light accent */
```

### Change Accent Color
```css
--accent: #your-accent;
--accent-hover: #darker-accent;
```

### Adjust Card Styling
```css
.card {
  box-shadow: var(--shadow-lg) !important;      /* Change shadow */
  border-radius: var(--radius-lg) !important;   /* Change roundness */
  padding: var(--space-5) !important;           /* Change padding */
}
```

### Adjust Typography Scale
```css
h2 {
  font-size: 1.5rem;  /* Change heading size */
}
```

### Adjust Spacing
Edit `--space-*` variables in `:root` to change all spacing globally.

---

## Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | IE11 |
|---------|--------|---------|--------|------|-----------|------|
| CSS Variables | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| CSS Grid | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Flexbox | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Scroll Snap | ✅ | ✅ | ⚠️ | ✅ | ✅ | ❌ |
| Box Shadow | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Transitions | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Focus Visible | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

**Legend:** ✅ Full support | ⚠️ Partial support | ❌ No support

---

## Performance Tips

1. **CSS Variable Updates** are instant across entire site
2. **Transitions** are GPU-accelerated (using transform)
3. **Scrollbar styling** doesn't affect performance
4. **Shadow system** uses optimized rgba values
5. **Media queries** are processed at load time

---

## Troubleshooting

### Cards not showing shadow
- Check that `ux-improvements.css` is linked after `project.css`
- Verify `!important` flags are not being overridden

### Video button not full-width on mobile
- Ensure viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Check that media query breakpoint is correct (768px)

### Gallery not scrolling smoothly
- Ensure `.gallery` has `overflow-x: auto`
- Check for conflicting `overflow: hidden` on parent

### Focus states not visible
- Ensure user has not disabled outlines via custom CSS
- Check outline color has sufficient contrast

---

## Additional Resources

- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **WCAG Contrast:** https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum
- **Scroll Snap:** https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
- **Prefers Reduced Motion:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- **Focus Visible:** https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible

---

**Last Updated:** November 15, 2025
