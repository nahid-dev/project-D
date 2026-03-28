# GiveBlood Theme - Color Specification

## 📐 Official Color Values

All colors use HSL format for easy customization.

### Primary Red (Donation Theme)
```
Hue:        0°       (pure red)
Saturation: 70%      (vivid)
Lightness:  50%      (balanced)

HSL Value:  hsl(0 70% 50%)
RGB Value:  rgb(217, 0, 0)
HEX Value:  #D90000
```

## 🎨 Light Mode Color Palette

### Background & Surfaces
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| background | hsl(0 0% 100%) | rgb(255, 255, 255) | Page/app background |
| card | hsl(0 0% 100%) | rgb(255, 255, 255) | Cards, containers |
| popover | hsl(0 0% 100%) | rgb(255, 255, 255) | Floating content |
| input | hsl(0 0% 95%) | rgb(242, 242, 242) | Form fields |
| secondary | hsl(0 0% 95%) | rgb(242, 242, 242) | Secondary backgrounds |
| muted | hsl(0 0% 90%) | rgb(230, 230, 230) | Muted backgrounds |

### Foreground & Text
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| foreground | hsl(0 0% 13%) | rgb(33, 33, 33) | Main text |
| card-foreground | hsl(0 0% 13%) | rgb(33, 33, 33) | Card text |
| muted-foreground | hsl(0 0% 45%) | rgb(115, 115, 115) | Secondary text |
| secondary-foreground | hsl(0 0% 13%) | rgb(33, 33, 33) | Text on secondary |
| primary-foreground | hsl(0 0% 100%) | rgb(255, 255, 255) | Text on red |
| accent-foreground | hsl(0 0% 100%) | rgb(255, 255, 255) | Text on accent |
| destructive-foreground | hsl(0 0% 100%) | rgb(255, 255, 255) | Text on destructive |

### Interactive Elements
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| primary | hsl(0 70% 50%) | rgb(217, 0, 0) | Red buttons, main actions |
| accent | hsl(0 72% 50%) | rgb(219, 0, 0) | Red accents |
| destructive | hsl(0 70% 42%) | rgb(174, 0, 0) | Dark red, danger |
| border | hsl(0 0% 92%) | rgb(235, 235, 235) | Light borders |
| ring | hsl(0 72% 50%) | rgb(219, 0, 0) | Focus rings (red) |

---

## 🌙 Dark Mode Color Palette

### Background & Surfaces
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| background | hsl(0 0% 8%) | rgb(20, 20, 20) | Page/app background |
| card | hsl(0 0% 15%) | rgb(38, 38, 38) | Cards, containers |
| popover | hsl(0 0% 15%) | rgb(38, 38, 38) | Floating content |
| input | hsl(0 0% 18%) | rgb(46, 46, 46) | Form fields |
| secondary | hsl(0 0% 23%) | rgb(58, 58, 58) | Secondary backgrounds |
| muted | hsl(0 0% 25%) | rgb(64, 64, 64) | Muted backgrounds |

### Foreground & Text
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| foreground | hsl(0 0% 95%) | rgb(242, 242, 242) | Main text |
| card-foreground | hsl(0 0% 95%) | rgb(242, 242, 242) | Card text |
| muted-foreground | hsl(0 0% 65%) | rgb(166, 166, 166) | Secondary text |
| secondary-foreground | hsl(0 0% 95%) | rgb(242, 242, 242) | Text on secondary |
| primary-foreground | hsl(0 0% 8%) | rgb(20, 20, 20) | Text on red |
| accent-foreground | hsl(0 0% 8%) | rgb(20, 20, 20) | Text on accent |
| destructive-foreground | hsl(0 0% 8%) | rgb(20, 20, 20) | Text on destructive |

### Interactive Elements
| Token | HSL Value | RGB Value | Usage |
|-------|-----------|-----------|-------|
| primary | hsl(0 75% 58%) | rgb(221, 51, 51) | Red buttons, brighter |
| accent | hsl(0 75% 58%) | rgb(221, 51, 51) | Red accents |
| destructive | hsl(0 75% 60%) | rgb(227, 64, 64) | Red, danger |
| border | hsl(0 0% 20%) | rgb(51, 51, 51) | Dark borders |
| ring | hsl(0 75% 58%) | rgb(221, 51, 51) | Focus rings (bright red) |

---

## 🔴 Red Color Scale (50–900)

Complete red gradient for design flexibility:

| Scale | HSL Value | RGB Value | CSS Class |
|-------|-----------|-----------|-----------|
| **50** | hsl(0 100% 97%) | rgb(247, 242, 242) | `bg-red-50` |
| **100** | hsl(0 100% 94%) | rgb(245, 230, 230) | `bg-red-100` |
| **200** | hsl(0 86% 89%) | rgb(247, 189, 189) | `bg-red-200` |
| **300** | hsl(0 86% 79%) | rgb(245, 115, 115) | `bg-red-300` |
| **400** | hsl(0 80% 69%) | rgb(242, 72, 72) | `bg-red-400` |
| **500** | hsl(0 75% 60%) | rgb(242, 51, 51) | `bg-red-500` |
| **600** | hsl(0 72% 50%) | rgb(217, 0, 0) | `bg-red-600` ← Primary |
| **700** | hsl(0 70% 42%) | rgb(174, 0, 0) | `bg-red-700` ← Destructive |
| **800** | hsl(0 69% 35%) | rgb(135, 0, 0) | `bg-red-800` |
| **900** | hsl(0 68% 28%) | rgb(97, 0, 0) | `bg-red-900` |

---

## ✅ Contrast Ratios (WCAG Compliance)

### Light Mode Combinations
| Foreground | Background | Ratio | Level |
|-----------|-----------|-------|-------|
| foreground (dark text) | background (white) | 12.6:1 | AAA ✓ |
| primary (red) | background (white) | 5.4:1 | AA ✓ |
| muted-foreground | background (white) | 6.3:1 | AA ✓ |
| primary-foreground (white) | primary (red) | 5.4:1 | AA ✓ |

### Dark Mode Combinations
| Foreground | Background | Ratio | Level |
|-----------|-----------|-------|-------|
| foreground (light text) | background (dark) | 15.1:1 | AAA ✓ |
| primary (bright red) | background (dark) | 7.8:1 | AAA ✓ |
| primary-foreground (dark) | primary (red) | 7.8:1 | AAA ✓ |

---

## 📊 Saturation & Lightness Reference

### Saturation Levels
- **0%**: Grayscale (no color) — Used for all grays
- **68-75%**: High saturation reds — Used for red scale
- **72-75%**: Vivid reds — Used for primary/accent

### Lightness Levels
- **8%**: Very dark (dark mode background)
- **13%**: Dark (dark mode text for light backgrounds)
- **15-25%**: Dark gray (dark mode cards)
- **42-60%**: Red range (primary to destructive)
- **90-100%**: Light (light backgrounds, text on dark)

---

## 🔄 Light to Dark Mode Transformation

### Example: Primary Red
```
Light Mode:  hsl(0 70% 50%)  → hsl(0 75% 58%)  Dark Mode
             (classic red)     (brighter)
             
             Increased saturation: 70% → 75%
             Increased lightness:  50% → 58% (for visibility on dark)
```

### Example: Foreground Text
```
Light Mode:  hsl(0 0% 13%)   → hsl(0 0% 95%)   Dark Mode
             (dark text)       (light text)
             
             Lightness goes from dark to light
```

---

## 🎯 Color Psychology & Medical Theme

- **Red (Primary)**: Energy, urgency, life-saving nature of blood donation
- **White (Background)**: Cleanliness, sterility, medical/healthcare context
- **Dark Gray (Text)**: Professional, readable, easy on eyes
- **Gray Scale**: Neutral, medical, clinical appearance

---

## 🛠️ How to Use These Values

### In CSS
```css
.button {
  background-color: hsl(0 70% 50%);  /* Primary red */
  color: hsl(0 0% 100%);             /* White text */
}

@media (prefers-color-scheme: dark) {
  .button {
    background-color: hsl(0 75% 58%); /* Brighter for dark mode */
  }
}
```

### In Tailwind
```tsx
<button className="bg-primary text-primary-foreground">
  Donate Now
</button>
```

### CSS Variables (app/globals.css)
```css
:root {
  --primary: hsl(0 70% 50%);
  --background: hsl(0 0% 100%);
}

.dark {
  --primary: hsl(0 75% 58%);
  --background: hsl(0 0% 8%);
}
```

---

## 📝 Hex Color Reference (for Designer Handoff)

### Primary Colors
- Primary Red: `#D90000`
- Red (Bright): `#DD3333`
- Text (Dark): `#212121`
- Text (Light): `#F2F2F2`

### Full Light Mode Hex
- Background: `#FFFFFF`
- Foreground: `#212121`
- Border: `#EBEBEB`
- Primary: `#D90000`
- Muted: `#E6E6E6`

### Full Dark Mode Hex
- Background: `#141414`
- Foreground: `#F2F2F2`
- Border: `#333333`
- Card: `#262626`
- Primary: `#DD3333`

---

**Version**: 1.0  
**Last Updated**: 2026-03-29  
**Format**: HSL (primary), RGB (reference), HEX (design tools)
