import { createFileRoute } from "@tanstack/react-router";
import { PickupPage } from "@/components/butta-rush-site";

export const Route = createFileRoute("/pickup")({
  head: () => ({
    meta: [
      { title: "Pickup Booking — Butta Rush" },
      {
        name: "description",
        content:
          "Choose a pickup date and time, add your address, and send your Butta Rush order on WhatsApp.",
      },
      { property: "og:title", content: "Pickup Booking — Butta Rush" },
      {
        property: "og:description",
        content: "Reserve a convenient Butta Rush pickup time before confirming your order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PickupPage,
});
