# GiveBlood Theme Documentation

A clean, minimal medical-style theme for blood donation platform UI. Built with HSL CSS variables and Tailwind CSS semantic tokens.

## Color Philosophy

The theme uses a **red-based medical palette** with:
- **White backgrounds** for light mode (clean, minimal)
- **Dark backgrounds** for dark mode (high contrast, accessible)
- **Red accents** throughout (primary action, donations, urgency)
- **Subtle grays** for muted states and borders

## CSS Variables

### Light Mode (`:root`)

All colors use HSL format (`hsl(hue saturation% lightness%)`):

#### Semantic Tokens
- `--primary`: `hsl(0 70% 50%)` — Red, main brand color
- `--primary-foreground`: `hsl(0 0% 100%)` — White text on red
- `--accent`: `hsl(0 72% 50%)` — Red accent, same as primary
- `--accent-foreground`: `hsl(0 0% 100%)` — White text
- `--secondary`: `hsl(0 0% 95%)` — Light gray background
- `--secondary-foreground`: `hsl(0 0% 13%)` — Dark text
- `--muted`: `hsl(0 0% 90%)` — Lighter gray
- `--muted-foreground`: `hsl(0 0% 45%)` — Medium gray text
- `--destructive`: `hsl(0 70% 42%)` — Dark red, for danger states
- `--destructive-foreground`: `hsl(0 0% 100%)` — White
- `--background`: `hsl(0 0% 100%)` — White
- `--foreground`: `hsl(0 0% 13%)` — Dark gray/black text
- `--card`: `hsl(0 0% 100%)` — White cards
- `--card-foreground`: `hsl(0 0% 13%)` — Dark text
- `--border`: `hsl(0 0% 92%)` — Light border
- `--input`: `hsl(0 0% 95%)` — Light input background
- `--input-foreground`: `hsl(0 0% 13%)` — Dark input text
- `--ring`: `hsl(0 72% 50%)` — Red focus ring
- `--popover`: `hsl(0 0% 100%)` — White
- `--popover-foreground`: `hsl(0 0% 13%)` — Dark text

### Dark Mode (`.dark`)

Automatically inverted for accessibility:

- `--primary`: `hsl(0 75% 58%)` — Brighter red for dark backgrounds
- `--background`: `hsl(0 0% 8%)` — Very dark
- `--foreground`: `hsl(0 0% 95%)` — Near white
- `--card`: `hsl(0 0% 15%)` — Dark gray card
- `--muted`: `hsl(0 0% 25%)` — Slightly lighter gray
- `--input`: `hsl(0 0% 18%)` — Dark input field
- `--border`: `hsl(0 0% 20%)` — Dark border
- `--ring`: `hsl(0 75% 58%)` — Bright red focus

### Red Color Scale (50–900)

Complete gradient for design flexibility:

```
--red-50:  hsl(0 100% 97%)
--red-100: hsl(0 100% 94%)
--red-200: hsl(0 86% 89%)
--red-300: hsl(0 86% 79%)
--red-400: hsl(0 80% 69%)
--red-500: hsl(0 75% 60%)
--red-600: hsl(0 72% 50%)  ← Primary
--red-700: hsl(0 70% 42%)  ← Destructive
--red-800: hsl(0 69% 35%)
--red-900: hsl(0 68% 28%)
```

## Tailwind Semantic Tokens

Use these Tailwind classes throughout your components:

### Text Colors
- `text-foreground` — Main text
- `text-muted-foreground` — Secondary text
- `text-primary-foreground` — Text on red backgrounds
- `text-accent-foreground` — Text on accents
- `text-secondary-foreground` — Text on secondary
- `text-destructive-foreground` — Text on destructive

### Background Colors
- `bg-background` — Page background
- `bg-card` — Card containers
- `bg-primary` — Red buttons, actions
- `bg-secondary` — Light gray backgrounds
- `bg-muted` — Even lighter backgrounds
- `bg-accent` — Red accents
- `bg-destructive` — Dark red, danger actions
- `bg-input` — Input fields
- `bg-popover` — Floating content

### Border Colors
- `border-border` — Light gray borders
- `border-input` — Input field borders
- `border-ring` — Focus rings (red)

### Red Scale (Direct Use)
- `bg-red-50` through `bg-red-900`
- `text-red-50` through `text-red-900`
- `border-red-50` through `border-red-900`

## Usage Examples

### Button (Primary)
```tsx
<button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-red-700">
  Donate Now
</button>
```

### Card
```tsx
<div className="p-6 bg-card text-foreground border border-border rounded-lg">
  <h3 className="font-semibold">Donation Card</h3>
  <p className="text-muted-foreground">Secondary information</p>
</div>
```

### Input Field
```tsx
<input
  type="text"
  className="px-3 py-2 bg-input border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring rounded"
  placeholder="Enter your name"
/>
```

### Badge
```tsx
<span className="px-2 py-1 bg-red-100 text-red-900 rounded text-sm font-medium">
  Urgent
</span>
```

### Destructive Button
```tsx
<button className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-red-800">
  Cancel Donation
</button>
```

## Dark Mode

Add the `.dark` class to any parent element to enable dark mode:

```tsx
<html className="dark">
  {/* Dark mode applied to entire app */}
</html>
```

Or for component-level dark mode:

```tsx
<div className="dark bg-background text-foreground">
  {/* This div and children use dark theme */}
</div>
```

## Design Principles

1. **Medical Cleanliness**: White/dark with minimal clutter
2. **Blood Donation Theme**: Red as primary brand color
3. **High Contrast**: Ensures accessibility (WCAG AA+)
4. **Semantic Naming**: Color names reflect purpose, not appearance
5. **HSL Format**: Easy to adjust brightness without changing hue
6. **Dark Mode First**: Full support for light and dark interfaces

## Customization

To adjust the theme, edit the CSS variables in [app/globals.css](app/globals.css):

### Change Primary Red
```css
:root {
  --primary: hsl(0 70% 45%); /* Darker red */
}
```

### Adjust Dark Mode Contrast
```css
.dark {
  --background: hsl(0 0% 4%); /* Even darker */
  --foreground: hsl(0 0% 98%); /* Even whiter */
}
```

### Add Custom Scale
```css
:root {
  --orange-500: hsl(25 95% 53%);
  --blue-500: hsl(217 92% 76%);
}
```

Add to `@theme inline` block in globals.css:
```css
--color-orange-500: var(--orange-500);
--color-blue-500: var(--blue-500);
```

## Component Integration

All shadcn/ui components automatically use these tokens:

- **Button**: Uses `bg-primary`, `text-primary-foreground`
- **Card**: Uses `bg-card`, `text-foreground`, `border-border`
- **Input**: Uses `bg-input`, `border-border`, `focus:ring-ring`
- **Badge**: Uses `bg-primary`, `text-primary-foreground`
- **Alert**: Uses `bg-destructive`, `text-destructive-foreground`

No additional configuration needed—components work out of the box!

## Accessibility

- ✅ WCAG AA contrast ratios
- ✅ Full dark mode support
- ✅ High visibility focus rings (red)
- ✅ Semantic color naming
- ✅ Tested with accessibility tools

## Resources

- [CSS Variables Reference](app/globals.css)
- [Live Theme Demo](app/page.tsx)
- [Tailwind Colors Guide](https://tailwindcss.com/docs/customizing-colors)
