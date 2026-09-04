export type MenuCategory =
  "Cakes" | "Pastries" | "Food / Meals" | "Treats & Trays" | "Custom / Sugar Craft";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number | null;
  portion: string;
  description: string;
  image: string;
  varies?: boolean;
  minimumOrder?: boolean;
  inquiryOnly?: boolean;
};

export type OrderLine = {
  item: MenuItem;
  quantity: number;
};

export const WHATSAPP_NUMBER = "2349077383838";

export const menuCategories: Array<"All" | MenuCategory> = [
  "All",
  "Cakes",
  "Pastries",
  "Food / Meals",
  "Treats & Trays",
  "Custom / Sugar Craft",
];

const heroImage = "/__l5e/assets-v1/b1277068-eda6-4e85-942b-ec26790cb8ae/butta-rush-hero.jpg";
const jollofImage = "/__l5e/assets-v1/d263085a-7ace-478e-ac40-93e8e22c3def/butta-rush-jollof.jpg";
const cakeImage = "/__l5e/assets-v1/2fd6eab6-3a84-48c0-9f2e-c0dad9227212/butta-rush-cake.jpg";
const chopsImage =
  "/__l5e/assets-v1/d9f16891-8513-47ea-a5e9-eb9a554873ab/butta-rush-small-chops.jpg";

export const menuItems: MenuItem[] = [
  {
    id: "four-layer-cake",
    name: '8" Four Layers Buttercream Cake',
    category: "Cakes",
    price: 96000,
    portion: "8 inch · serves 20–25",
    description:
      "A tall, celebration-ready buttercream cake finished in your chosen colours and flavour profile.",
    image: cakeImage,
  },
  {
    id: "three-layer-cake",
    name: '8" Three Layers Buttercream Cake',
    category: "Cakes",
    price: 72000,
    portion: "8 inch · serves 15–20",
    description:
      "Soft layers, generous buttercream and a polished finish for birthdays, milestones and intimate celebrations.",
    image: cakeImage,
  },
  {
    id: "five-layer-cake",
    name: '6" Five Layers Buttercream Cake',
    category: "Cakes",
    price: 75000,
    portion: "6 inch · serves 10–15",
    description:
      "A compact but striking layered cake, made to order with a warm, handcrafted finish.",
    image: cakeImage,
  },
  {
    id: "fondant-ten-inch",
    name: '10" One Layer Fondant Cake',
    category: "Cakes",
    price: 36000,
    portion: "10 inch · serves 20–25",
    description:
      "A clean fondant finish with room for a personalised message or simple celebration design.",
    image: cakeImage,
  },
  {
    id: "fondant-six-inch",
    name: '6" Two Layers Fondant Cake',
    category: "Cakes",
    price: 30000,
    portion: "6 inch · serves 10–15",
    description: "Two generous layers wrapped in smooth fondant and finished for your occasion.",
    image: cakeImage,
  },
  {
    id: "fondant-eight-inch",
    name: '8" Five Layers Fondant Cake',
    category: "Cakes",
    price: 70000,
    portion: "8 inch · serves 15–20",
    description:
      "A showpiece cake with a fondant finish. Final price depends on the complexity of your design.",
    image: cakeImage,
    varies: true,
  },
  {
    id: "mini-pastry",
    name: "Mini (Pocket Friendly) Pastry",
    category: "Pastries",
    price: 700,
    portion: "Per piece · minimum order applies",
    description: "A pocket-friendly pastry for snack boxes, office treats and party platters.",
    image: chopsImage,
    minimumOrder: true,
  },
  {
    id: "meatpie",
    name: "Meatpie",
    category: "Pastries",
    price: 1000,
    portion: "Per piece · minimum order applies",
    description: "Flaky, golden pastry filled with a savoury, comforting meat filling.",
    image: chopsImage,
    minimumOrder: true,
  },
  {
    id: "fishroll",
    name: "Fishroll",
    category: "Pastries",
    price: 700,
    portion: "Per piece · minimum order applies",
    description: "Crisp pastry wrapped around a seasoned fish filling, made fresh for every order.",
    image: chopsImage,
    minimumOrder: true,
  },
  {
    id: "chin-chin",
    name: "Chin Chin",
    category: "Pastries",
    price: 2500,
    portion: "Pack",
    description: "Crunchy, lightly sweet chin chin for gifting, grazing and party tables.",
    image: chopsImage,
  },
  {
    id: "chin-chin-large",
    name: "850g Chin Chin",
    category: "Pastries",
    price: 7500,
    portion: "850g pack",
    description: "A generous pack of crunchy chin chin for sharing or stocking the pantry.",
    image: chopsImage,
  },
  {
    id: "plain-donuts",
    name: "Plain Ring Donuts",
    category: "Pastries",
    price: 700,
    portion: "Per piece",
    description: "Soft, golden ring donuts made for breakfast boxes and sweet tables.",
    image: cakeImage,
  },
  {
    id: "jam-donuts",
    name: "Jam Donuts",
    category: "Pastries",
    price: 1000,
    portion: "Per piece",
    description: "Soft donuts filled with a bright jam centre and finished fresh.",
    image: cakeImage,
  },
  {
    id: "glazed-donuts-two",
    name: "Glazed Donut (Box of 2)",
    category: "Pastries",
    price: 3000,
    portion: "Box of 2",
    description: "Two soft donuts finished with a glossy glaze for a small sweet moment.",
    image: cakeImage,
  },
  {
    id: "glazed-donuts-four",
    name: "Glazed Donut (Box of 4)",
    category: "Pastries",
    price: null,
    portion: "Box of 4",
    description: "A box of four glazed donuts. Ask us for the current price and available finish.",
    image: cakeImage,
    inquiryOnly: true,
  },
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    category: "Food / Meals",
    price: 6000,
    portion: "Tray / serving size to confirm",
    description:
      "Deeply seasoned, smoky jollof rice prepared for weekday meals, celebrations and full event spreads.",
    image: jollofImage,
  },
  {
    id: "spaghetti-surprise",
    name: "Spaghetti Surprise",
    category: "Food / Meals",
    price: 6000,
    portion: "Tray / serving size to confirm",
    description:
      "A saucy, generous spaghetti dish with a little Butta Rush surprise in every forkful.",
    image: jollofImage,
  },
  {
    id: "rice-goatmeat",
    name: "Rice & Goatmeat Pepper Sauce",
    category: "Food / Meals",
    price: 7000,
    portion: "Serving size to confirm",
    description: "A hearty rice meal paired with tender goatmeat and a lively pepper sauce.",
    image: jollofImage,
  },
  {
    id: "small-chops",
    name: "Small Chops Platter",
    category: "Food / Meals",
    price: 300,
    portion: "Per piece · minimum order applies",
    description:
      "A party favourite: a mix of bite-sized savouries for events, meetings and easy entertaining.",
    image: chopsImage,
    minimumOrder: true,
  },
  {
    id: "treat-boxes",
    name: "Food / Treat Boxes",
    category: "Treats & Trays",
    price: 20000,
    portion: "Box · contents vary",
    description:
      "A thoughtful box built around your occasion, appetite and budget. Contents and final price vary.",
    image: heroImage,
    varies: true,
  },
  {
    id: "food-tray",
    name: "Food Tray",
    category: "Treats & Trays",
    price: 60000,
    portion: "Tray · serving size to confirm",
    description:
      "A generous tray for family tables, celebrations and events that need feeding done beautifully.",
    image: heroImage,
  },
  {
    id: "fondant-craft",
    name: "Fondant Craft",
    category: "Custom / Sugar Craft",
    price: 15000,
    portion: "Custom piece",
    description:
      "Custom toppers, figures and sugar craft details made to bring a cake concept to life.",
    image: cakeImage,
    varies: true,
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    category: "Custom / Sugar Craft",
    price: null,
    portion: "Size to confirm",
    description:
      "A warmly spiced carrot cake. Ask us for current pricing, size options and finish.",
    image: cakeImage,
    inquiryOnly: true,
  },
];

export const featuredItems = menuItems.filter((item) =>
  ["jollof-rice", "three-layer-cake", "small-chops", "meatpie"].includes(item.id),
);

export function formatNaira(value: number | null) {
  if (value === null) return "Price on request";
  return `₦${value.toLocaleString("en-NG")}`;
}

export function getWhatsAppUrl(lines: OrderLine[]) {
  if (lines.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const total = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
  const message = [
    "Hi Butta Rush! I'd like to place an order:",
    ...lines.map(
      (line) =>
        `${line.quantity}x ${line.item.name} — ${formatNaira((line.item.price ?? 0) * line.quantity)}`,
    ),
    `Total: ${formatNaira(total)}`,
    "Please confirm availability and delivery details.",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
