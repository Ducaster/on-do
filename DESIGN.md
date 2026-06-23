# ON-DO Design System

## 1. Atmosphere & Identity

ON-DO is a coaching site for young adults who want to put their current state into words. The public voice starts from everyday scenes: delayed replies, repeated relationship worries, postponed decisions, tiredness that is hard to explain. Visuals may use glass, thermal motion, and editorial Korean typography, but user-facing copy should stay plain and concrete.

### Public Voice

- Start with a lived scene before naming a service category.
- Use Korean labels in public UI. Avoid decorative English eyebrow text such as "coaching modes" or "inner data."
- Prefer "요즘 이런 순간이 있나요", "첫 회기에서", "끝나고 남는 것" over abstract labels like "signal", "flow", "pattern", "next step."
- Keep ON-DO's distinctive program names visible; they carry more brand character than generic coaching copy.
- Do not overuse the temperature metaphor. "온도" is the brand name, not a phrase that needs to appear in every section.
- Build coach trust through shared process, confidentiality, matching, and question style. Do not lean on individual celebrity, inflated credentials, or career glamour.
- CTA copy should name the low-pressure next step: "내 상황으로 시작하기", "10분 사전 확인 요청하기", or "이 방향으로 문의하기."

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --color-bg | #F7F2EA | #171412 | Main page background |
| Surface/secondary | --color-bg-warm | #EAF4EF | #211719 | Mint-washed section background |
| Surface/cream | --color-bg-cream | #FFF8EF | #211719 | Elevated warm areas |
| Surface/dark | --color-bg-dark | #171412 | #171412 | High-contrast CTA/footer |
| Surface/glass | --color-glass | rgba(255, 252, 246, 0.68) | rgba(23, 20, 18, 0.72) | Glass panels, nav, consoles |
| Text/primary | --color-text | #171412 | #FFF8EF | Headlines and body |
| Text/secondary | --color-text-secondary | #51433C | #D8C7B6 | Supporting copy |
| Text/muted | --color-text-muted | #74675F | #A89584 | Labels and metadata |
| Text/inverse | --color-text-inverse | #FFF8EF | #FFF8EF | Dark sections |
| Border/default | --color-border | #D8CEC4 | #3A2E27 | Default dividers |
| Border/glass | --color-glass-stroke | rgba(255, 255, 255, 0.62) | rgba(255, 255, 255, 0.16) | Refractive glass edges |
| Accent/primary | --color-primary | #CC382B | #FF8A72 | Main CTA and active states |
| Accent/hover | --color-primary-dark | #9F241C | #FFB19F | CTA hover |
| Accent/coral | --color-coral | #FF5A3D | #FF8A72 | Heat, motion, hero accents |
| Accent/mint | --color-mint | #1FD3B4 | #55E4CC | Calming interactive support |
| Accent/blue | --color-signal-blue | #2F5BEA | #78A3FF | Digital signal details |
| Accent/violet | --color-program-5 | #7C51E8 | #C8B7FF | Limited contrast accent |
| Status/success | --status-success | #0D7566 | #55E4CC | Success messages |
| Status/warning | --status-warning | #B86B11 | #FFD166 | Cautions |
| Status/error | --status-error | #CC382B | #FF8A72 | Errors |

### Rules

- The palette is "Digital Thermal": porcelain base, graphite text, heat coral CTA, mint support, and blue signal. It should feel current without turning into a generic AI gradient site.
- Beige and terracotta must not dominate more than one full viewport in a row. Break warm sections with mint-washed or dark graphite bands.
- Use mint and blue for motion, active states, progress, and 3D signal details. Do not use them as large decorative blobs.
- Glass surfaces must always preserve text contrast. If readability drops, increase opacity before adding shadows or blur.
- Violet is a limited secondary accent only. No dominant purple-blue AI gradient palette. No decorative orb or bokeh backgrounds.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | 64px desktop / 44px mobile | 800 | 1.02 | 0 | Hero statement |
| H1 | 44px desktop / 34px mobile | 800 | 1.1 | 0 | Page title |
| H2 | 34px desktop / 28px mobile | 750 | 1.18 | 0 | Section headers |
| H3 | 24px desktop / 21px mobile | 700 | 1.28 | 0 | Feature titles |
| Body/lg | 18px | 500 | 1.75 | 0 | Lead paragraphs |
| Body | 16px | 400 | 1.75 | 0 | Default text |
| Body/sm | 14px | 500 | 1.6 | 0 | Secondary info |
| Caption | 12px | 650 | 1.4 | 0 | Metadata, labels |

### Font Stack

- Primary: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- Display: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- Accent serif: Cormorant Garamond for large numerals only

### Rules

- Korean headings must wrap by phrase, not syllable. Use wide containers and shorter copy.
- Letter spacing stays at 0 for body and headings.
- Body text never drops below 14px.

## 4. Spacing & Layout

### Base Unit

All spacing derives from 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Tight inline spacing |
| --space-2 | 8px | Control gap, compact padding |
| --space-3 | 12px | Small groups |
| --space-4 | 16px | Default component padding |
| --space-5 | 20px | Comfortable component padding |
| --space-6 | 24px | Form and panel padding |
| --space-8 | 32px | Component groups |
| --space-10 | 40px | Subsections |
| --space-12 | 48px | Section header gap |
| --space-16 | 64px | Mobile section rhythm |
| --space-24 | 96px | Desktop section rhythm |
| --space-32 | 128px | Major chapters |

### Grid

- Max content width: 1180px
- Hero content width: 1120px
- Breakpoints: 640px, 768px, 1024px, 1280px
- Use asymmetric grids, editorial strips, and full-width bands instead of repeated card decks.

## 5. Components

### Glass Nav
- **Structure**: fixed nav, transparent before scroll, glass after scroll.
- **States**: active section, hover, focus, mobile sheet.
- **Motion**: opacity and transform only.

### Mood Selector
- **Structure**: segmented chip group + active insight panel.
- **States**: selected, hover, focus.
- **Accessibility**: buttons with `aria-pressed`.

### Signal CTA
- **Structure**: primary filled CTA + quieter secondary link.
- **States**: hover lift, active press, focus ring.

### Glass Console
- **Structure**: form fields on a single translucent surface.
- **States**: loading, submitted, focus, disabled.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 140ms | ease-out | Button press |
| Standard | 260ms | cubic-bezier(0.22, 1, 0.36, 1) | Hover, tabs, panels |
| Emphasis | 520ms | cubic-bezier(0.16, 1, 0.3, 1) | Hero entry, section reveal |
| Ambient | 12s-24s | linear | Non-critical background drift |

### Rules

- Animate transform, opacity, and filter only.
- Respect `prefers-reduced-motion`.
- 3D hero is decorative and must not block content, navigation, or LCP-critical text.

## 7. Depth & Surface

### Strategy

Mixed, with strict roles:

- Glass for navigation, hero controls, mood selector, and contact console.
- Tonal bands for long content sections.
- Cards use max 8px radius. Large glass sheets may use 16px radius when they are not repeated cards.
- Shadows are tinted warm and shallow. Depth should feel refractive, not heavy.

| Level | Value | Usage |
|-------|-------|-------|
| Glass edge | inset 0 1px rgba(255,255,255,0.58) | Glass top edge |
| Warm shadow | 0 24px 80px rgba(204, 56, 43, 0.12) | Hero panels, consoles |
| Soft shadow | 0 12px 40px rgba(23, 20, 18, 0.10) | Hover emphasis |
