---
name: Atelier de Luxo
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4f4540'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#81756f'
  outline-variant: '#d3c3bd'
  surface-tint: '#705a4f'
  primary: '#25160e'
  on-primary: '#ffffff'
  primary-container: '#3c2a21'
  on-primary-container: '#aa9084'
  inverse-primary: '#dec1b3'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#241700'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e2b00'
  on-tertiary-container: '#b4914b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdcce'
  primary-fixed-dim: '#dec1b3'
  on-primary-fixed: '#281810'
  on-primary-fixed-variant: '#574238'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style
The design system embodies the philosophy of "Quiet Luxury"—an aesthetic defined by understated elegance, high-quality materiality, and a refusal to shout. Drawing inspiration from high-end boutique hotels and contemporary art galleries, the UI acts as a curated canvas for fashion photography.

The style is **Minimalist** with a strong **Editorial** influence. It prioritizes generous whitespace (breathing room), fine-line strokes, and a rhythmic balance between bold, high-contrast serif typography and functional, geometric sans-serifs. The emotional response is one of calm, exclusivity, and timeless sophistication.

## Colors
The palette is a tonal exploration of earth and parchment. 

*   **Primary (Deep Chocolate):** Used for primary typography and high-impact UI elements. It provides the grounding weight for the design.
*   **Secondary (Latte/Cocoa):** A warm, mid-tone brown used for subtle backgrounds, secondary buttons, or decorative strokes.
*   **Accent (Gold/Bronze):** Used sparingly for micro-details, such as active states, small icons, or thin divider accents to signify "luxury."
*   **Neutral (Linen/Parchment):** The foundation of the UI. Rather than pure white, these warm off-whites reduce eye strain and feel more tactile and organic.

## Typography
The typographic hierarchy creates a dialogue between tradition and modernity. 

**Bodoni Moda** is used for headlines to evoke the feeling of a luxury fashion magazine. Its high contrast between thick and thin strokes requires generous sizing to maintain elegance.

**Montserrat** provides a functional counterpoint for body copy and navigation. It is set with increased letter spacing and line height to ensure the text feels airy and premium. All labels and utility text should be set in uppercase Montserrat with wide tracking (0.1em) to mimic high-end jewelry branding.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a curated, gallery-like composition. Content is centered within a 1280px container, utilizing a 12-column grid.

Spacing is intentionally expansive. Sections are separated by large vertical gaps (`section-padding`) to force the user to slow down and appreciate individual pieces of content. On mobile, margins are tightened to 20px, but vertical rhythm remains generous to maintain the "luxury" of space. Use asymmetrical layouts (e.g., images offset from the center) to reinforce the artistic, non-standardized boutique feel.

## Elevation & Depth
In alignment with the "Quiet Luxury" aesthetic, this design system avoids heavy drop shadows and dramatic neomorphism. 

Depth is achieved through **Tonal Layering** and **Fine Lines**.
*   **Surface Tiers:** Use subtle shifts between Parchment (#FCFBF7) and Linen (#F9F7F2) to differentiate sections.
*   **Outlines:** Elements are defined by 1px solid borders in Cocoa (#A68A64) at low opacity (10-20%).
*   **Shadows:** When necessary (e.g., on a floating navigation bar), use a single "Ambient" shadow: `0 4px 20px rgba(60, 42, 33, 0.04)`. It should feel like a soft glow rather than a hard shadow.

## Shapes
The shape language is **Sharp (0)**. 

To maintain an architectural and high-fashion editorial look, UI elements such as buttons, input fields, and image containers use 90-degree corners. This sharpness conveys precision, confidence, and a classic structural integrity often found in luxury packaging and gallery framing.

## Components
### Buttons
*   **Primary:** Solid Deep Chocolate (#3C2A21) with White or Parchment text. Sharp corners. No shadow.
*   **Secondary:** Ghost style. 1px Deep Chocolate border with uppercase Montserrat text. 
*   **Tertiary:** Text-only with a subtle Gold (#C5A059) underline that expands on hover.

### Input Fields
*   Minimalist design: Only a bottom border (1px) in Cocoa. Labels sit above in uppercase Montserrat (label-sm). Active state changes the border color to Deep Chocolate.

### Cards
*   Image-centric. No borders or shadows by default. The typography (Product Name in Bodoni, Price in Montserrat) sits below the image with generous padding.

### Navigation
*   A "sticky" top bar with a glassmorphism effect: 80% opacity Parchment background with a `blur(10px)` and a single 1px bottom border in a very faint bronze.

### Lists & Menus
*   Use significant vertical padding between list items. Hover states should be indicated by a subtle color shift or a thin gold vertical line to the left of the text.