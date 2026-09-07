# Butta Rush Logo Redesign Plan

## Goal
Redesign the Butta Rush logo into a cleaner, more memorable mark that works on the website header, favicon, and social sharing, while keeping the warm, appetizing brand feel.

## Decisions made (defaults since questions were skipped)
- **Direction:** Refined wordmark + simple icon, not a heavy badge.
- **Palette:** Evolve the existing warm brown and gold/yellow into a richer, more cohesive food palette.
- **Format:** Flexible system — a primary horizontal/wordmark logo plus a compact circular or monogram icon for favicon and small uses.
- **Tone:** Friendly, modern Nigerian catering: approachable but not childish, premium but not cold.

## Steps
1. **Audit current usage**
   - Header currently uses a "B" circle + "Butta Rush." text.
   - Favicon already points to `/favicon.png`.
   - No other logo references found.

2. **Generate 3 logo concepts**
   - Concept A: Modern wordmark with a subtle butter-drop or swirl icon.
   - Concept B: Refined circular badge with "BR" monogram, keeping the ring energy of the current logo.
   - Concept C: Bold, slightly retro food-truck style wordmark with a small flame/speed accent.
   - All use the evolved brown/gold palette and a clean background.

3. **Present options for selection**
   - Show all three concepts side by side.
   - User picks one concept (or mixes elements).

4. **Refine chosen concept**
   - Generate a high-resolution final version.
   - Create the compact icon version from the same mark.

5. **Integrate into the site**
   - Replace the header text mark with the new logo image.
   - Replace `public/favicon.png` with the compact icon version.
   - Update any OG/social image if one exists.
   - Run build and verify the header and favicon render correctly.

## Deliverables
- 3 logo concept images
- Final primary logo asset
- Final compact icon/favicon asset
- Updated `src/components/butta-rush-site.tsx` header
- Updated `public/favicon.png`
- Successful build check
