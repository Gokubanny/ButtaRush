import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/butta-rush-site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Butta Rush Nigerian Catering" },
      {
        name: "description",
        content:
          "Browse Butta Rush cakes, pastries, Nigerian meals, treat boxes and catering trays, then order directly on WhatsApp.",
      },
      { property: "og:title", content: "Menu — Butta Rush Nigerian Catering" },
      {
        property: "og:description",
        content:
          "Browse cakes, pastries, meals and trays from Butta Rush. Order directly on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});
