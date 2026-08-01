# La Bontà Ristorante — Fix Instructions for Claude Code

## Project
C:\Users\Yahya\Desktop\GIT_projects\la-bonta-ristorante

## Stack
Single-file HTML (1,855 lines) · Vanilla JS · Three.js · Font Awesome · i18n (IT/EN/DE/FR) · OpenStreetMap

## Design Style (must PRESERVE)
- **Palette**: Black background (#0A0A0A), **gold accent (#C9A14A)**, white text (#F5F5F0), dark surfaces (#121212)
- **Fonts**: Cinzel (headings) + Playfair Display (body) — elegant, Italian fine dining
- **Style**: Gold/black luxury fine dining — warm amber tones, glassmorphism cards, Cinzel serif headings
- **Theme**: Authentic Italian trattoria — warm, inviting, premium but not cold

This is the same premium dark chic niche as the doctor website and Studio Medico, but with GOLD palette instead of emerald/orange.

## Current State
It's a single Italian restaurant HTML with:
- Splash screen with animated logo
- Hero with Three.js particle background
- Interactive rotating circle menu (5 categories at 72° intervals)
- Menu modal with dish cards + emoji placeholders
- Combo specials (4 menus with dynamic pricing)
- Gallery with lightbox (placeholder emoji images)
- Location with OpenStreetMap
- Reservation modal
- Language switcher (IT/EN/DE/FR) with full i18n data
- Contact + WhatsApp buttons
- Scroll-triggered sticky nav

## What Claude Code Must Do

### 1. Run it first
Open the file in a browser. Check ALL sections render. Check browser console for JS errors.

### 2. Fix ALL issues

**Code Fixes:**
- The gallery images have empty `url:''` fields — they show as broken images. Replace with emoji placeholders instead
- The Three.js canvas may conflict with hero layout — check particle positioning and z-index
- The sticky nav `hidden` class on header should toggle on scroll properly
- The rotating circle menu items may not position correctly on first load (offsets depend on container width)
- i18n data is inline JS — check all translations are complete and not missing keys
- The reservation form might not have server-side processing — check if it POSTs to a real endpoint or is just UI
- Phone numbers have `+393****9466` with asterisks — placeholder pattern, could be confusing
- The `combo-modal-detail` CSS class may not be defined — check styles

**Design / Animation Consistency:**
- Keep the gold (#C9A14A) luxury theme — DO NOT change colors
- The rotating circle menu should work on mobile — items might overlap at small sizes
- Add a floating WhatsApp button (already partially there but check all WhatsApp links)
- The section reveal animations (`.reveal` IntersectionObserver) should trigger properly
- Gallery lightbox should have swipe/touch support on mobile
- Make sure all 3 hero info cards render with correct data
- The combo grid people-editable pricing should calculate correctly

**Professional Polish:**
- Add smooth image placeholders for gallery (gradient backgrounds with emoji instead of broken images)
- The reservation modal should validate inputs before submission
- All `data-i18n` attributes should have corresponding translations
- Add a favicon (inline SVG or emoji)
- Add a `[data-i18n]` check — make sure no visible text is missing its translation
- The `combo-img` gradient overlay should always show, even with placeholder images

### 3. Make it pro and client-ready
- No broken images or dead links
- All 4 languages work correctly
- Smooth animations throughout
- Mobile responsive across all devices
- The gold-on-black luxury feel is consistent across ALL sections
- Font loading from Google Fonts should be reliable (add fallback fonts)

### 4. Rules
- PRESERVE the gold/black luxury fine-dining theme — DON'T change to another color scheme
- DON'T add a backend — this is a static HTML site
- DON'T rewrite the architecture — fix what's there
- Keep the rotating circle menu, it's a signature feature
- Add a README.md if missing
- Test in browser after each fix class
- The phone number is: +39 347 432 9466

## Verification
After all fixes, open the HTML file in a browser and verify:
1. Splash screen → fades into hero
2. Three.js particles animate in background
3. Circle menu rotates on hover, items clickable
4. Menu modal opens with dish cards
5. Language switcher changes all text
6. Gallery lightbox navigates
7. Map renders
8. Reservation modal opens
9. Mobile responsive
10. No console errors
