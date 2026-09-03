# Butta Rush website build plan

## Goal

Replace the starter placeholder with a warm, dark-first two-page Butta Rush website: a scrollable home page for discovery and trust, plus a filterable menu catalog that turns a session order into a pre-filled WhatsApp message.

## User-facing experience

1. **Home (`/`)**
   - Sticky responsive navigation with Butta Rush wordmark, Menu link, and persistent Order on WhatsApp CTA.
   - Food-led hero with the supplied headline direction, generated temporary food imagery, View Menu and WhatsApp actions.
   - Featured menu preview using the same catalog data as the menu page.
   - Short “Who’s cooking” story, proof/gallery strip, trust points, final WhatsApp CTA, and contact footer.
2. **Menu (`/menu`)**
   - Category filter tabs for all requested catalog categories.
   - Responsive product grid with generated temporary imagery, clear prices, portions, and relevant status badges.
   - Inquiry-only treatment for TBD names/prices: visible in the catalog with “Price on request” and no quantity/order controls.
   - Product detail dialog with quantity stepper and live line total for orderable items.
   - Session-only order drawer/summary with item quantities, subtotal, remove controls, and a WhatsApp handoff.
   - WhatsApp message uses `2349077383838`, includes itemized quantities and totals, and opens the deep link in a new tab.

## Visual direction

- Use the supplied near-black, burnt-rust, warm-gold, cream, and deep-red direction as semantic design tokens in `src/styles.css`.
- Use Manrope via a document-head font link, with a restrained editorial food-catalog layout: high-contrast type, generous spacing, subtle borders, moderate corner radius, and minimal motion.
- Generate a cohesive temporary set of appetizing Nigerian food, cake, pastry, and catering images; keep the image data centralized so real owner photography can replace it later.
- Keep mobile-first behavior prominent: horizontally scrollable category filters, touch-sized controls, a bottom/sticky order indicator, and a compact mobile navigation.

## Technical implementation

- Add a shared menu data module and reusable site/catalog components so the home preview and menu catalog cannot drift apart.
- Create the missing `/menu` TanStack route and preserve the root `<Outlet />` architecture.
- Update the root metadata and add unique `head()` metadata for both content routes; remove starter placeholder metadata and markup.
- Use the existing design-system Button, Dialog/Sheet, Badge, and related components for interactions rather than raw styled controls.
- Keep order state in React session state only; do not add authentication, database, payment, or backend work.
- Build WhatsApp message generation as a small shared utility with URL encoding and an empty-order guard.
- Add only the focused CSS needed for typography, imagery, sticky states, responsive layout, and reduced-motion behavior.

## Validation

- Verify the home page, menu route, filter changes, detail quantity updates, inquiry-only items, order summary, remove behavior, and WhatsApp URL/message generation.
- Check responsive rendering at mobile and desktop sizes, including navigation and sticky order controls.
- Confirm there are no placeholder starter markers, broken routes, console errors, or metadata regressions.