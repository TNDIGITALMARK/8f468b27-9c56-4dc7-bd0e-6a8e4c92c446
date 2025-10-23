# GREEN BAR HAIFA - DESIGN SYSTEM SPECIFICATION
## PIXEL-PERFECT REPLICATION REQUIREMENTS

### EXTRACTED FROM: ai-generated-preview.png

---

## COLOR SYSTEM (EXACT HEX CODES)

### Primary Colors
- **Deep Emerald Green**: `#006644`
  - Usage: Primary brand color, events section background, accents
  - CSS Variable: `--color-primary`

- **Warm Copper**: `#B76E51`
  - Usage: CTA buttons, interactive elements, highlights, hover states
  - CSS Variable: `--color-accent`

- **Charcoal Black**: `#222222`
  - Usage: Header background, footer background, typography
  - CSS Variable: `--color-dark`

- **Off-White**: `#F5F5F5`
  - Usage: Section backgrounds, alternating content areas
  - CSS Variable: `--color-background`

- **Pure White**: `#FFFFFF`
  - Usage: Text on dark backgrounds, card backgrounds, clean surfaces
  - CSS Variable: `--color-light`

### Semantic Colors
- **Text Primary**: `#222222` (charcoal on light backgrounds)
- **Text Secondary**: `#666666` (muted text)
- **Text Inverse**: `#FFFFFF` (text on dark backgrounds)

---

## TYPOGRAPHY SYSTEM (EXACT SPECIFICATIONS)

### Font Families
- **Primary Serif** (Headings, Logo, Hero Text): `'Playfair Display', serif`
  - Weights: 400 (regular), 600 (semibold), 700 (bold)
  - Import: Google Fonts
  - CSS Variable: `--font-heading`

- **Secondary Sans-Serif** (Body, Navigation, Descriptions): `'Montserrat', sans-serif`
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  - Import: Google Fonts
  - CSS Variable: `--font-body`

### Typography Scale
- **Hero Heading (h1)**:
  - Font: Playfair Display Bold (700)
  - Size: 56px / 3.5rem
  - Line Height: 1.1
  - Letter Spacing: -0.02em

- **Section Heading (h2)**:
  - Font: Playfair Display Semibold (600)
  - Size: 40px / 2.5rem
  - Line Height: 1.2
  - Letter Spacing: -0.01em

- **Card Title (h3)**:
  - Font: Playfair Display Semibold (600)
  - Size: 24px / 1.5rem
  - Line Height: 1.3

- **Body Text**:
  - Font: Montserrat Regular (400)
  - Size: 16px / 1rem
  - Line Height: 1.6

- **Navigation Links**:
  - Font: Montserrat Medium (500)
  - Size: 16px / 1rem
  - Letter Spacing: 0.02em

---

## SPACING SYSTEM (EXACT PIXEL VALUES)

### Section Padding
- **Vertical**: 80px (5rem) top and bottom
- **Horizontal**: 24px (1.5rem) on mobile, 80px (5rem) on desktop

### Component Spacing
- **Card Gap**: 32px (2rem) between cocktail cards
- **Content Margin**: 24px (1.5rem) between content blocks
- **Button Padding**: 16px 32px (1rem 2rem)
- **Section Gap**: 0px (full-width sections touch)

---

## COMPONENT SPECIFICATIONS

### Navigation Header
- **Background**: `#222222` (charcoal)
- **Height**: 80px
- **Logo**: Playfair Display, white color, left-aligned
- **Links**: Montserrat Medium, white/off-white, horizontal, 32px spacing
- **CTA Button**: Copper background (#B76E51), white text, rounded-lg (8px radius)

### Hero Section
- **Layout**: Full-width background image with centered overlay text
- **Image**: Bar interior with arched windows, night/dusk lighting, city views
- **Text Color**: White (#FFFFFF)
- **Overlay**: Subtle dark gradient for text readability
- **Height**: 600px desktop, 400px mobile

### Cocktail Cards
- **Background**: White (#FFFFFF)
- **Border**: None or subtle shadow
- **Image**: Square aspect ratio (1:1), professional product photography
- **Image Background**: Dark/dramatic surface
- **Text Alignment**: Center
- **Padding**: 24px (1.5rem)
- **Border Radius**: 8px
- **Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`

### Events Section
- **Background**: Deep Emerald Green (#006644)
- **Text Color**: White (#FFFFFF)
- **Layout**: Text left, image right (or full-width on mobile)
- **CTA Button**: Copper (#B76E51), white text

### Footer
- **Background**: Charcoal (#222222)
- **Text Color**: Off-white (#F5F5F5)
- **Layout**: Multi-column (logo + info, quick links, contact, social)
- **Social Icons**: White/copper on hover
- **Padding**: 60px vertical, 80px horizontal

---

## VISUAL EFFECTS (EXACT CSS VALUES)

### Shadows
- **Card Shadow**: `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);`
- **Button Shadow**: `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);`
- **Hover Lift**: `box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);`

### Border Radius
- **Buttons**: 8px (rounded-lg)
- **Cards**: 8px (rounded-lg)
- **Images**: 8px (rounded-lg) or 0 (for full-width)

### Transitions
- **Duration**: 0.3s
- **Easing**: ease-in-out
- **Properties**: all, transform, box-shadow, background-color

### Hover States
- **Buttons**: Scale 1.02, lift shadow
- **Cards**: Lift shadow, subtle scale
- **Links**: Color change to copper (#B76E51)

---

## IMAGE ASSET SPECIFICATIONS

### Hero Image
- **Subject**: Bar interior at dusk/night with arched windows showing city lights
- **Composition**: Symmetrical, centered, wide angle
- **Lighting**: Warm interior lighting, blue hour exterior
- **Aspect Ratio**: 16:9 or wider
- **Treatment**: Slight dark overlay for text readability

### Cocktail Product Photos (3 cards)
1. **Emerald Elixir**: Green cocktail in elegant glass, dark surface, focused lighting
2. **Sunset Spirit**: Copper/warm-toned cocktail in copper mug, moody lighting
3. **Midnight Manhattan**: Dark cocktail in rocks glass with ice, dramatic lighting

**Common Treatments**:
- Aspect Ratio: 1:1 (square)
- Background: Dark/black surface
- Lighting: Focused, professional, dramatic
- Composition: Centered, hero product shot

### Event/Rooftop Image
- **Subject**: Rooftop terrace with seating, city skyline view
- **Time**: Golden hour or early evening
- **Composition**: Wide angle showing ambiance
- **Aspect Ratio**: 16:9 or 4:3
- **Treatment**: Natural lighting, vibrant colors

---

## RESPONSIVE BREAKPOINTS

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Adaptations
- Stack cocktail cards vertically
- Reduce hero height to 400px
- Reduce font sizes by 20-30%
- Full-width CTA buttons
- Hamburger navigation menu

---

## ASSET GENERATION STRATEGY

### Images to Generate/Source:
1. **Hero Background**: AI-generate bar interior with arched windows, night cityscape
2. **Emerald Elixir Cocktail**: AI-generate green cocktail on dark surface
3. **Copper Old Fashioned**: AI-generate copper mug cocktail
4. **Midnight Manhattan**: AI-generate dark cocktail with ice
5. **Rooftop Terrace**: AI-generate rooftop seating with city view

### Placeholder Strategy:
- All images maintain exact aspect ratios from design
- Apply consistent treatments (shadows, borders, filters)
- Use high-quality generation prompts matching the design aesthetic

---

## IMPLEMENTATION CHECKLIST

- [ ] Import Playfair Display (400, 600, 700) from Google Fonts
- [ ] Import Montserrat (400, 500, 600, 700) from Google Fonts
- [ ] Define CSS custom properties for all colors
- [ ] Configure typography scale with exact sizes
- [ ] Create reusable button component with copper accent
- [ ] Build navigation with exact specifications
- [ ] Generate/source all required images
- [ ] Apply image treatments consistently
- [ ] Implement responsive breakpoints
- [ ] Add smooth transitions and hover states
- [ ] Test pixel-perfect match against reference

---

**SUCCESS CRITERIA**: Implementation is visually INDISTINGUISHABLE from ai-generated-preview.png
