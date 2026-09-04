import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/butta-rush-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Butta Rush — Nigerian Catering, Cakes & Pastries" },
      {
        name: "description",
        content:
          "Home-style Nigerian dishes, celebration cakes, pastries and catering trays made to order by Butta Rush.",
      },
      { property: "og:title", content: "Butta Rush — Nigerian Catering, Cakes & Pastries" },
      {
        property: "og:description",
        content:
          "Home-style Nigerian dishes, cakes and pastries made to order. Browse the menu and order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}
