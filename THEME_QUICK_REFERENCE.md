# GiveBlood Theme - Quick Reference

## ⚡ Quick Start

Use Tailwind semantic color classes throughout your components:

```tsx
// Buttons
<button className="bg-primary text-primary-foreground">Donate</button>
<button className="bg-destructive text-destructive-foreground">Cancel</button>

// Cards
<div className="bg-card text-foreground border border-border rounded-lg p-6">
  <h3 className="font-semibold">Title</h3>
  <p className="text-muted-foreground">Subtitle</p>
</div>

// Inputs
<input className="bg-input border border-border text-foreground focus:ring-2 focus:ring-ring" />

// Text
<h1 className="text-foreground">Heading</h1>
<p className="text-muted-foreground">Secondary text</p>
```

## 🎨 Available Tailwind Classes

### Background Colors
| Class | Purpose |
|-------|---------|
| `bg-background` | Page/app background |
| `bg-foreground` | Text color inverse |
| `bg-card` | Cards, modals |
| `bg-primary` | Red buttons, main actions |
| `bg-secondary` | Light gray backgrounds |
| `bg-muted` | Even lighter backgrounds |
| `bg-accent` | Red accents (same as primary) |
| `bg-destructive` | Dark red, danger actions |
| `bg-input` | Input fields |
| `bg-popover` | Floating content |

### Text Colors
| Class | Purpose |
|-------|---------|
| `text-foreground` | Main text |
| `text-muted-foreground` | Secondary text |
| `text-primary` | Red text (primary color) |
| `text-primary-foreground` | White text on red |
| `text-secondary` | (rarely used) |
| `text-secondary-foreground` | Dark text on light gray |
| `text-accent` | Red text |
| `text-accent-foreground` | White on red |
| `text-destructive` | Red text (destructive) |
| `text-destructive-foreground` | White on red |

### Border Colors
| Class | Purpose |
|-------|---------|
| `border-border` | Light gray borders |
| `border-input` | Input field borders |
| `border-ring` | Focus ring (red) |

### Red Scale (Direct Use)
```tsx
// Use for custom styling outside semantic tokens
<div className="bg-red-50 text-red-900">Lightest to darkest red</div>

// Available: red-50, red-100, red-200, ..., red-900
```

## 🌙 Dark Mode

Add to any parent element:

```tsx
<div className="dark">
  <div className="bg-background text-foreground">
    Dark theme applied here
  </div>
</div>
```

Or globally in layout:

```tsx
<html className="dark">
  {/* Entire app uses dark mode */}
</html>
```

## 📋 Common Component Patterns

### Primary Button (Donation CTA)
```tsx
<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-red-700 transition">
  Donate Blood
</button>
```

### Secondary Button
```tsx
<button className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-muted transition">
  Learn More
</button>
```

### Card Container
```tsx
<div className="bg-card text-foreground border border-border rounded-lg p-6 shadow-sm">
  <h3 className="font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground mb-4">Description</p>
  <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Action</button>
</div>
```

### Input Field
```tsx
<input
  type="text"
  placeholder="Your input"
  className="w-full px-4 py-2 bg-input border border-border text-foreground placeholder-muted-foreground rounded focus:outline-none focus:ring-2 focus:ring-ring"
/>
```

### Alert/Badge
```tsx
<div className="px-3 py-1 bg-red-100 text-red-900 rounded-full text-sm font-medium">
  Urgent
</div>
```

### Disabled State
```tsx
<button className="px-6 py-2 bg-muted text-muted-foreground rounded cursor-not-allowed opacity-50">
  Disabled
</button>
```

## 🔍 Color Values Reference

### Light Mode
```
Primary Red:        hsl(0 70% 50%)
Background:         hsl(0 0% 100%) — white
Text:               hsl(0 0% 13%) — dark gray
Muted Text:         hsl(0 0% 45%)
Borders:            hsl(0 0% 92%)
```

### Dark Mode
```
Primary Red:        hsl(0 75% 58%) — brighter
Background:         hsl(0 0% 8%) — very dark
Text:               hsl(0 0% 95%) — near white
Card:               hsl(0 0% 15%)
Borders:            hsl(0 0% 20%)
```

## ✅ Checklist for Using Theme

- [ ] Use semantic classes (`bg-primary`, not `bg-red-600`)
- [ ] Test dark mode (`.dark` class)
- [ ] Ensure focus rings are visible (automatically red with `focus:ring-ring`)
- [ ] Check contrast for WCAG AA (automatically met)
- [ ] Use `text-muted-foreground` for secondary text
- [ ] Use `bg-card` + `border-border` for card components
- [ ] Use `bg-destructive` for danger/delete actions

## 🚀 With shadcn/ui Components

All shadcn/ui components automatically use the theme—no configuration needed:

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <>
      <Button>Primary (uses bg-primary)</Button>
      <Card>Card container (uses bg-card)</Card>
      <Input placeholder="Input (uses bg-input)" />
    </>
  )
}
```

## 📖 Full Documentation

See [THEME.md](THEME.md) for complete color reference and customization guide.
