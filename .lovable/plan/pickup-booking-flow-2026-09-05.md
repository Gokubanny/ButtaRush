# Pickup booking flow

## Goal
Add a dedicated pickup page where customers choose a pickup date, select a time slot between 7:00 AM and 9:00 PM, and enter their address before sending the order to Butta Rush on WhatsApp.

## User experience
1. Add a visible “Pickup” entry in the site navigation.
2. From the order summary, customers choose “Set pickup details” instead of going straight to WhatsApp.
3. The pickup page shows the pending order, a required date field, hourly time slots from 7:00 AM through 9:00 PM, and a required free-form address field so any customer address can be entered.
4. Validate that all three details are filled, keep the customer on the page when information is missing, and show a clear confirmation state when ready.
5. The final WhatsApp message includes the selected items, subtotal, pickup date, pickup time, and address.
6. If someone opens the pickup page without an order, provide a clear path back to the menu rather than showing an empty checkout.

## Static-site approach
- Keep the experience fully client-side; no accounts, database, or server booking system will be added.
- Preserve the pending order and pickup details in browser session storage so the flow survives navigation and works from the prerendered static pages.
- Add `/pickup` to the static prerender list and give it its own page metadata.

## Technical details
- Add a typed pickup-details model and WhatsApp message formatter alongside the existing menu/order utilities.
- Add the pickup route and page UI using the existing Button, form, and design tokens.
- Update the order sheet and shared navigation to link into the new flow, while keeping direct WhatsApp contact available for customers who do not need pickup scheduling.
- Validate the static build, the `/pickup` output, order state handoff, required fields, and the generated WhatsApp link.
