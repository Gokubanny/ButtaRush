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

export type PickupDetails = {
  date: string;
  time: string;
  address: string;
};

export const WHATSAPP_NUMBER = "2349077383838";
export const ORDER_STORAGE_KEY = "butta-rush-order";
export const PICKUP_STORAGE_KEY = "butta-rush-pickup";

export const menuCategories: Array<"All" | MenuCategory> = [
  "All",
  "Cakes",
  "Pastries",
  "Food / Meals",
  "Treats & Trays",
  "Custom / Sugar Craft",
];

const heroImage = "/__l5e/assets-v1/b1277068-eda6-4e85-942b-ec26790cb8ae/butta-rush-hero.jpg";
const jollofImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788616207/7533a72fc29d20007edf927033a76a3c_bztfv8.jpg";
const cakeImage = "/__l5e/assets-v1/2fd6eab6-3a84-48c0-9f2e-c0dad9227212/butta-rush-cake.jpg";
const chopsImage =
  "/__l5e/assets-v1/d9f16891-8513-47ea-a5e9-eb9a554873ab/butta-rush-small-chops.jpg";
  const fourlayercakeImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518068/White_wedding_cake_nrp7xg.jpg";
  const threelayercakeImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518410/Simple_cake_dkchod.jpg";
  const fivelayercakeImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518814/Beyaz_D%C3%BC%C4%9F%C3%BCn_Pastas%C4%B1_ofvwxo.jpg";
  const foundantcakeimage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518814/Strawberry_flavour_cake_decorated_with_love_shaped_cream_and_bow_dr57t8.jpg";
  const twolayerfoundantcakeimage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518813/download_6_gy0pyk.jpg";
  const fivelayerfoundantcakeimage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788519194/40_Inspiring_Wedding_Cake_Creations___Simplicity_Five-Tier_Wedding_Cake_pfjrvo.jpg";
  const pastryimage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/Puff_Pastry_Pockets__A_Flaky_and_Delicious_Treat_ve8itq.jpg"
  const meatpie = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/Nigerian_meat_pie_bxkild.jpg";
  const fishrollImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/253K_views_16K_reactions___Fish_rolls___._These_are_fried_fish_rolls_and_it_s_a_good_day_to_make_some_for_your_family._They_are_crunchy_on_the_outside_soft_and_delicious_on_qp18wg.jpg";
  const chinchin = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520723/Crunchy_chinchin_blbzpq.jpg";
  const bigchinchin = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520723/Nigerian_CHIN_CHIN_aehqzk.jpg";
  const plaindonuts = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788615882/donut_lwykmi.jpg";
  const jamdonuts = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788615880/Jam_doughnuts_glqphj.jpg";
  const glazeddonuts = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788615881/download_12_r0uu4n.jpg";
  const glazedbox = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788615881/download_13_qsvr6b.jpg";
  const spagettiImage = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788616200/food_porn_ul8akb.jpg";
  const ricebeaf = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788615881/Jollof_ltbvod.jpg";
  const smallchopstray = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788616370/Amazing_Small_Chops_Vendors_k0mzdw.jpg";
  const treatbox = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788616707/download_14_nqeafp.jpg"
  const foodtray = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788616395/bakedwithlove_smallchops_surprise_partyfood_homemade_abuja_foodtrays_partytray_birthdaycake_cakes_baking_instagood_qflrf4.jpg"
  const foundantcake = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788617042/My_client_convinced_me_to_make_a_fondant_cake_and_I_like_how_it_turned_out_____dccdqx.jpg";
  const carrotcake = "https://res.cloudinary.com/dxpquojo2/image/upload/v1788617043/Carrot_cake_vjog0s.jpg";

export const menuItems: MenuItem[] = [
  {
    id: "four-layer-cake",
    name: '8" Four Layers Buttercream Cake',
    category: "Cakes",
    price: 96000,
    portion: "8 inch · serves 20–25",
    description:
      "A tall, celebration-ready buttercream cake finished in your chosen colours and flavour profile.",
    image: fourlayercakeImage,
  },
  {
    id: "three-layer-cake",
    name: '8" Three Layers Buttercream Cake',
    category: "Cakes",
    price: 72000,
    portion: "8 inch · serves 15–20",
    description:
      "Soft layers, generous buttercream and a polished finish for birthdays, milestones and intimate celebrations.",
    image: threelayercakeImage,
  },
  {
    id: "five-layer-cake",
    name: '6" Five Layers Buttercream Cake',
    category: "Cakes",
    price: 75000,
    portion: "6 inch · serves 10–15",
    description:
      "A compact but striking layered cake, made to order with a warm, handcrafted finish.",
    image: fivelayercakeImage,
  },
  {
    id: "fondant-ten-inch",
    name: '10" One Layer Fondant Cake',
    category: "Cakes",
    price: 36000,
    portion: "10 inch · serves 20–25",
    description:
      "A clean strawberry fondant finish with room for a personalised message or simple celebration design.",
    image: foundantcakeimage,
  },
  {
    id: "fondant-six-inch",
    name: '6" Two Layers Fondant Cake',
    category: "Cakes",
    price: 30000,
    portion: "6 inch · serves 10–15",
    description: "Two generous layers wrapped in smooth fondant and finished for your occasion.",
    image: twolayerfoundantcakeimage,
  },
  {
    id: "fondant-eight-inch",
    name: '8" Five Layers Fondant Cake',
    category: "Cakes",
    price: 70000,
    portion: "8 inch · serves 15–20",
    description:
      "This exquisite cake stands tall with five tiers, each embodying a delicate balance of simplicity and beauty.",
    image: fivelayerfoundantcakeimage,
    varies: true,
  },
  {
    id: "mini-pastry",
    name: "Mini (Pocket Friendly) Pastry",
    category: "Pastries",
    price: 700,
    portion: "Per piece · minimum order applies",
    description: "A pocket-friendly pastry for snack boxes, office treats and party platters.",
    image: pastryimage,
    minimumOrder: true,
  },
  {
    id: "meatpie",
    name: "Meatpie",
    category: "Pastries",
    price: 1000,
    portion: "Per piece · minimum order applies",
    description: "Flaky, golden pastry filled with a savoury, comforting meat filling.",
    image: meatpie,
    minimumOrder: true,
  },
  {
    id: "fishroll",
    name: "Fishroll",
    category: "Pastries",
    price: 700,
    portion: "Per piece · minimum order applies",
    description: "Crisp pastry wrapped around a seasoned fish filling, made fresh for every order.",
    image: fishrollImage,
    minimumOrder: true,
  },
  {
    id: "chin-chin",
    name: "Chin Chin",
    category: "Pastries",
    price: 2500,
    portion: "Pack",
    description: "Crunchy, lightly sweet chin chin for gifting, grazing and party tables.",
    image: chinchin,
  },
  {
    id: "chin-chin-large",
    name: "850g Chin Chin",
    category: "Pastries",
    price: 7500,
    portion: "850g pack",
    description: "A generous pack of crunchy chin chin for sharing or stocking the pantry.",
    image: bigchinchin,
  },
  {
    id: "plain-donuts",
    name: "Plain Ring Donuts",
    category: "Pastries",
    price: 700,
    portion: "Per piece",
    description: "Soft, golden ring donuts made for breakfast boxes and sweet tables.",
    image: plaindonuts,
  },
  {
    id: "jam-donuts",
    name: "Jam Donuts",
    category: "Pastries",
    price: 1000,
    portion: "Per piece",
    description: "Soft donuts filled with a bright jam centre and finished fresh.",
    image: jamdonuts,
  },
  {
    id: "glazed-donuts-two",
    name: "Glazed Donut (Box of 2)",
    category: "Pastries",
    price: 3000,
    portion: "Box of 2",
    description: "Two soft donuts finished with a glossy glaze for a small sweet moment.",
    image: glazeddonuts,
  },
  {
    id: "glazed-donuts-four",
    name: "Glazed Donut (Box of 4)",
    category: "Pastries",
    price: null,
    portion: "Box of 4",
    description: "A box of four glazed donuts. Ask us for the current price and available finish.",
    image: glazedbox,
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
    name: "Spaghetti Jollof with Butta Rush Surprise",
    category: "Food / Meals",
    price: 6000,
    portion: "litre / serving size to confirm",
    description:
      "A saucy, generous spaghetti dish with a little Butta Rush surprise in every forkful.",
    image: spagettiImage,
  },
  {
    id: "jollof rice-spiced beaf",
    name: "Jollof Rice, Spiced Beef & plaintain",
    category: "Food / Meals",
    price: 8000,
    portion: "Serving size to confirm",
    description: "A hearty rice meal paired with tender goatmeat and a lively pepper sauce.",
    image: ricebeaf,
  },
  {
    id: "small-chops",
    name: "Small Chops Platter",
    category: "Food / Meals",
    price: 27000,
    portion: "Per piece · minimum order applies",
    description:
      "A party favourite: a mix of bite-sized savouries for events, meetings and easy entertaining.",
    image: smallchopstray,
    minimumOrder: true,
  },
  {
    id: "treat-boxes",
    name: "Food / Treat Boxes",
    category: "Treats & Trays",
    price: 40000,
    portion: "Box · contents vary",
    description:
      "A thoughtful box built around your occasion, appetite and budget. Contents and final price vary.",
    image: treatbox,
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
    image: foodtray,
  },
  {
    id: "fondant-craft",
    name: "Fondant Craft",
    category: "Custom / Sugar Craft",
    price: 15000,
    portion: "Custom piece",
    description:
      "Custom toppers, figures and sugar craft details made to bring a cake concept to life.",
    image: foundantcake,
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
    image: carrotcake,
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

export function getWhatsAppUrl(lines: OrderLine[], pickup?: PickupDetails) {
  if (lines.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const total = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
  const message = [
    "Hi Butta Rush! I'd like to place an order:",
    ...lines.map(
      (line) =>
        `${line.quantity}x ${line.item.name} Port Harcourt ${formatNaira((line.item.price ?? 0) * line.quantity)}`,
    ),
    `Total: ${formatNaira(total)}`,
    ...(pickup
      ? [
          "",
          "Pickup details:",
          `Date: ${pickup.date}`,
          `Time: ${pickup.time}`,
          `Address: ${pickup.address}`,
        ]
      : ["Please confirm availability and delivery details."]),
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function readStoredOrder(): OrderLine[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.sessionStorage.getItem(ORDER_STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((line) => {
      if (!line || typeof line !== "object") return [];
      const id = "item" in line && line.item && typeof line.item === "object" && "id" in line.item
        ? line.item.id
        : undefined;
      const quantity = "quantity" in line ? line.quantity : undefined;
      const item = menuItems.find((menuItem) => menuItem.id === id);
      return item && typeof quantity === "number" && quantity > 0
        ? [{ item, quantity: Math.floor(quantity) }]
        : [];
    });
  } catch {
    return [];
  }
}

export function storeOrder(lines: OrderLine[]) {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(lines));
  }
}

export function readStoredPickup(): PickupDetails | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.sessionStorage.getItem(PICKUP_STORAGE_KEY);
    if (!stored) return null;
    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") return null;
    const details = parsed as Partial<PickupDetails>;
    return typeof details.date === "string" &&
      typeof details.time === "string" &&
      typeof details.address === "string"
      ? { date: details.date, time: details.time, address: details.address }
      : null;
  } catch {
    return null;
  }
}

export function storePickup(details: PickupDetails) {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(PICKUP_STORAGE_KEY, JSON.stringify(details));
  }
}
