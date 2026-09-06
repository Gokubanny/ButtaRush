import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Plus, c as Menu, d as ArrowRight, i as ShoppingBag, l as Instagram, n as Truck, o as Minus, r as Sparkles, s as MessageCircle, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/butta-rush-site-D2etNZ2A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var WHATSAPP_NUMBER = "2349077383838";
var menuCategories = [
	"All",
	"Cakes",
	"Pastries",
	"Food / Meals",
	"Treats & Trays",
	"Custom / Sugar Craft"
];
var heroImage = "/__l5e/assets-v1/b1277068-eda6-4e85-942b-ec26790cb8ae/butta-rush-hero.jpg";
var jollofImage = "/__l5e/assets-v1/d263085a-7ace-478e-ac40-93e8e22c3def/butta-rush-jollof.jpg";
var cakeImage = "/__l5e/assets-v1/2fd6eab6-3a84-48c0-9f2e-c0dad9227212/butta-rush-cake.jpg";
var menuItems = [
	{
		id: "four-layer-cake",
		name: "8\" Four Layers Buttercream Cake",
		category: "Cakes",
		price: 96e3,
		portion: "8 inch · serves 20–25",
		description: "A tall, celebration-ready buttercream cake finished in your chosen colours and flavour profile.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518068/White_wedding_cake_nrp7xg.jpg"
	},
	{
		id: "three-layer-cake",
		name: "8\" Three Layers Buttercream Cake",
		category: "Cakes",
		price: 72e3,
		portion: "8 inch · serves 15–20",
		description: "Soft layers, generous buttercream and a polished finish for birthdays, milestones and intimate celebrations.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518410/Simple_cake_dkchod.jpg"
	},
	{
		id: "five-layer-cake",
		name: "6\" Five Layers Buttercream Cake",
		category: "Cakes",
		price: 75e3,
		portion: "6 inch · serves 10–15",
		description: "A compact but striking layered cake, made to order with a warm, handcrafted finish.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518814/Beyaz_D%C3%BC%C4%9F%C3%BCn_Pastas%C4%B1_ofvwxo.jpg"
	},
	{
		id: "fondant-ten-inch",
		name: "10\" One Layer Fondant Cake",
		category: "Cakes",
		price: 36e3,
		portion: "10 inch · serves 20–25",
		description: "A clean strawberry fondant finish with room for a personalised message or simple celebration design.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518814/Strawberry_flavour_cake_decorated_with_love_shaped_cream_and_bow_dr57t8.jpg"
	},
	{
		id: "fondant-six-inch",
		name: "6\" Two Layers Fondant Cake",
		category: "Cakes",
		price: 3e4,
		portion: "6 inch · serves 10–15",
		description: "Two generous layers wrapped in smooth fondant and finished for your occasion.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788518813/download_6_gy0pyk.jpg"
	},
	{
		id: "fondant-eight-inch",
		name: "8\" Five Layers Fondant Cake",
		category: "Cakes",
		price: 7e4,
		portion: "8 inch · serves 15–20",
		description: "This exquisite cake stands tall with five tiers, each embodying a delicate balance of simplicity and beauty.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788519194/40_Inspiring_Wedding_Cake_Creations___Simplicity_Five-Tier_Wedding_Cake_pfjrvo.jpg",
		varies: true
	},
	{
		id: "mini-pastry",
		name: "Mini (Pocket Friendly) Pastry",
		category: "Pastries",
		price: 700,
		portion: "Per piece · minimum order applies",
		description: "A pocket-friendly pastry for snack boxes, office treats and party platters.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/Puff_Pastry_Pockets__A_Flaky_and_Delicious_Treat_ve8itq.jpg",
		minimumOrder: true
	},
	{
		id: "meatpie",
		name: "Meatpie",
		category: "Pastries",
		price: 1e3,
		portion: "Per piece · minimum order applies",
		description: "Flaky, golden pastry filled with a savoury, comforting meat filling.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/Nigerian_meat_pie_bxkild.jpg",
		minimumOrder: true
	},
	{
		id: "fishroll",
		name: "Fishroll",
		category: "Pastries",
		price: 700,
		portion: "Per piece · minimum order applies",
		description: "Crisp pastry wrapped around a seasoned fish filling, made fresh for every order.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520335/253K_views_16K_reactions___Fish_rolls___._These_are_fried_fish_rolls_and_it_s_a_good_day_to_make_some_for_your_family._They_are_crunchy_on_the_outside_soft_and_delicious_on_qp18wg.jpg",
		minimumOrder: true
	},
	{
		id: "chin-chin",
		name: "Chin Chin",
		category: "Pastries",
		price: 2500,
		portion: "Pack",
		description: "Crunchy, lightly sweet chin chin for gifting, grazing and party tables.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520723/Crunchy_chinchin_blbzpq.jpg"
	},
	{
		id: "chin-chin-large",
		name: "850g Chin Chin",
		category: "Pastries",
		price: 7500,
		portion: "850g pack",
		description: "A generous pack of crunchy chin chin for sharing or stocking the pantry.",
		image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788520723/Nigerian_CHIN_CHIN_aehqzk.jpg"
	},
	{
		id: "plain-donuts",
		name: "Plain Ring Donuts",
		category: "Pastries",
		price: 700,
		portion: "Per piece",
		description: "Soft, golden ring donuts made for breakfast boxes and sweet tables.",
		image: cakeImage
	},
	{
		id: "jam-donuts",
		name: "Jam Donuts",
		category: "Pastries",
		price: 1e3,
		portion: "Per piece",
		description: "Soft donuts filled with a bright jam centre and finished fresh.",
		image: cakeImage
	},
	{
		id: "glazed-donuts-two",
		name: "Glazed Donut (Box of 2)",
		category: "Pastries",
		price: 3e3,
		portion: "Box of 2",
		description: "Two soft donuts finished with a glossy glaze for a small sweet moment.",
		image: cakeImage
	},
	{
		id: "glazed-donuts-four",
		name: "Glazed Donut (Box of 4)",
		category: "Pastries",
		price: null,
		portion: "Box of 4",
		description: "A box of four glazed donuts. Ask us for the current price and available finish.",
		image: cakeImage,
		inquiryOnly: true
	},
	{
		id: "jollof-rice",
		name: "Jollof Rice",
		category: "Food / Meals",
		price: 6e3,
		portion: "Tray / serving size to confirm",
		description: "Deeply seasoned, smoky jollof rice prepared for weekday meals, celebrations and full event spreads.",
		image: jollofImage
	},
	{
		id: "spaghetti-surprise",
		name: "Spaghetti Surprise",
		category: "Food / Meals",
		price: 6e3,
		portion: "Tray / serving size to confirm",
		description: "A saucy, generous spaghetti dish with a little Butta Rush surprise in every forkful.",
		image: jollofImage
	},
	{
		id: "rice-goatmeat",
		name: "Rice & Goatmeat Pepper Sauce",
		category: "Food / Meals",
		price: 7e3,
		portion: "Serving size to confirm",
		description: "A hearty rice meal paired with tender goatmeat and a lively pepper sauce.",
		image: jollofImage
	},
	{
		id: "small-chops",
		name: "Small Chops Platter",
		category: "Food / Meals",
		price: 300,
		portion: "Per piece · minimum order applies",
		description: "A party favourite: a mix of bite-sized savouries for events, meetings and easy entertaining.",
		image: "/__l5e/assets-v1/d9f16891-8513-47ea-a5e9-eb9a554873ab/butta-rush-small-chops.jpg",
		minimumOrder: true
	},
	{
		id: "treat-boxes",
		name: "Food / Treat Boxes",
		category: "Treats & Trays",
		price: 2e4,
		portion: "Box · contents vary",
		description: "A thoughtful box built around your occasion, appetite and budget. Contents and final price vary.",
		image: heroImage,
		varies: true
	},
	{
		id: "food-tray",
		name: "Food Tray",
		category: "Treats & Trays",
		price: 6e4,
		portion: "Tray · serving size to confirm",
		description: "A generous tray for family tables, celebrations and events that need feeding done beautifully.",
		image: heroImage
	},
	{
		id: "fondant-craft",
		name: "Fondant Craft",
		category: "Custom / Sugar Craft",
		price: 15e3,
		portion: "Custom piece",
		description: "Custom toppers, figures and sugar craft details made to bring a cake concept to life.",
		image: cakeImage,
		varies: true
	},
	{
		id: "carrot-cake",
		name: "Carrot Cake",
		category: "Custom / Sugar Craft",
		price: null,
		portion: "Size to confirm",
		description: "A warmly spiced carrot cake. Ask us for current pricing, size options and finish.",
		image: cakeImage,
		inquiryOnly: true
	}
];
var featuredItems = menuItems.filter((item) => [
	"jollof-rice",
	"three-layer-cake",
	"small-chops",
	"meatpie"
].includes(item.id));
function formatNaira(value) {
	if (value === null) return "Price on request";
	return `₦${value.toLocaleString("en-NG")}`;
}
function getWhatsAppUrl(lines) {
	if (lines.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;
	const total = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
	const message = [
		"Hi Butta Rush! I'd like to place an order:",
		...lines.map((line) => `${line.quantity}x ${line.item.name} Port Harcourt ${formatNaira((line.item.price ?? 0) * line.quantity)}`),
		`Total: ${formatNaira(total)}`,
		"Please confirm availability and delivery details."
	].join("\n");
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
var imageAlt = (item) => `${item.name} from Butta Rush`;
function WhatsAppButton({ children = "Order on WhatsApp", className, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: cn("bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90", className),
		onClick,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: getWhatsAppUrl([]),
			target: "_blank",
			rel: "noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), children]
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3 text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-primary text-lg font-black text-primary-foreground",
						children: "B"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-xl font-bold tracking-tight",
						children: ["Butta Rush", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition-colors hover:text-foreground",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "transition-colors hover:text-foreground",
							children: "Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "transition-colors hover:text-foreground",
							children: "Our story"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
						className: "h-11 rounded-full px-5",
						children: "Order now"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					"aria-label": "Open navigation",
					onClick: () => setOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				side: "right",
				className: "w-[min(88vw,360px)] border-l-border bg-background p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
							className: "font-display text-2xl",
							children: ["Butta Rush", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Home-style Nigerian dishes, cakes and pastries made to order." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-10 grid gap-5 text-lg font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								onClick: () => setOpen(false),
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								onClick: () => setOpen(false),
								children: "Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								onClick: () => setOpen(false),
								children: "Our story"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
						className: "mt-10 w-full",
						children: "Order on WhatsApp"
					})
				]
			})
		})]
	});
}
function MenuCard({ item, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		className: "group flex h-auto w-full flex-col items-stretch justify-start whitespace-normal rounded-2xl border border-border/80 bg-card p-0 text-left shadow-none hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:shadow-primary/10",
		onClick: () => onSelect(item),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[1.12] w-full overflow-hidden rounded-t-2xl bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: imageAlt(item),
					width: 1200,
					height: 1200,
					loading: "lazy",
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-full border border-border/50 bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur",
					children: item.category
				}),
				item.inquiryOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-3 left-3 rounded-full bg-deep-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-deep-red-foreground",
					children: "Inquiry only"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[154px] flex-col p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold leading-tight text-card-foreground",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: item.portion
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-bold text-primary",
					children: item.varies && item.price ? `From ${formatNaira(item.price)}` : formatNaira(item.price)
				}), !item.inquiryOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary",
					children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})]
		})]
	});
}
function QuantityControl({ quantity, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center rounded-full border border-border bg-muted/50 p-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-9 w-9 rounded-full",
				"aria-label": "Decrease quantity",
				onClick: () => onChange(Math.max(1, quantity - 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-10 text-center text-sm font-bold tabular-nums",
				children: quantity
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-9 w-9 rounded-full",
				"aria-label": "Increase quantity",
				onClick: () => onChange(quantity + 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
			})
		]
	});
}
function DetailDialog({ item, open, onOpenChange, onAdd }) {
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	if (!item) return null;
	const total = (item.price ?? 0) * quantity;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto border-border bg-card p-0 sm:max-w-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square overflow-hidden sm:aspect-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: imageAlt(item),
						width: 1200,
						height: 1200,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-[0.18em] text-primary",
									children: item.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "mt-3 font-display text-3xl leading-tight",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "mt-3 text-sm leading-6",
									children: item.description
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border-y border-border py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
									children: item.portion
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl font-bold text-primary",
									children: item.varies ? `From ${formatNaira(item.price)}` : formatNaira(item.price)
								})] }), !item.inquiryOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityControl, {
									quantity,
									onChange: setQuantity
								})]
							}), item.minimumOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs font-medium text-deep-red",
								children: "Minimum order applies Port Harcourt confirm quantity with us on WhatsApp."
							})]
						}),
						item.inquiryOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							className: "mt-6 w-full",
							onClick: () => onOpenChange(false),
							children: "Ask about this item"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-6 h-12 w-full rounded-full",
							onClick: () => {
								onAdd(item, quantity);
								onOpenChange(false);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}),
								" Add to order · ",
								formatNaira(total)
							]
						})
					]
				})]
			})
		})
	});
}
function OrderSummary({ lines, onRemove, onClear }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
	const subtotal = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [lines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-4 z-30 mx-auto flex max-w-lg items-center gap-3 px-4 sm:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "h-14 flex-1 rounded-full border border-primary-foreground/10 bg-primary px-5 text-primary-foreground shadow-2xl shadow-primary/25 hover:bg-primary/90",
			onClick: () => setOpen(true),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-left",
					children: "View your order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary-foreground/15 px-2.5 py-1 text-xs font-bold",
					children: itemCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display font-bold",
					children: formatNaira(subtotal)
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "flex w-[min(92vw,460px)] flex-col border-l-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
					className: "text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "font-display text-3xl",
						children: "Your order"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Review your picks, then send the details to Butta Rush on WhatsApp." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex-1 space-y-4 overflow-y-auto",
					children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 border-b border-border pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: line.item.image,
								alt: "",
								className: "h-16 w-16 rounded-xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold leading-tight",
									children: line.item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										line.quantity,
										" × ",
										formatNaira(line.item.price)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary",
									children: formatNaira((line.item.price ?? 0) * line.quantity)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									className: "mt-1 h-7 px-0 text-xs text-muted-foreground hover:text-destructive",
									onClick: () => onRemove(line.item.id),
									children: "Remove"
								})]
							})
						]
					}, line.item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold",
								children: formatNaira(subtotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5 h-12 w-full rounded-full",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: getWhatsAppUrl(lines),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Order on WhatsApp"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "mt-2 w-full text-muted-foreground",
							onClick: onClear,
							children: "Clear order"
						})
					]
				})
			]
		})
	})] });
}
function Catalog({ preview = false }) {
	const [category, setCategory] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [lines, setLines] = (0, import_react.useState)([]);
	const filteredItems = (0, import_react.useMemo)(() => preview ? featuredItems : menuItems.filter((item) => category === "All" || item.category === category), [category, preview]);
	const addToOrder = (item, quantity) => setLines((current) => {
		if (current.find((line) => line.item.id === item.id)) return current.map((line) => line.item.id === item.id ? {
			...line,
			quantity: line.quantity + quantity
		} : line);
		return [...current, {
			item,
			quantity
		}];
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		!preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none",
			children: menuCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: category === item ? "default" : "outline",
				className: cn("shrink-0 rounded-full", category === item && "bg-primary text-primary-foreground"),
				onClick: () => setCategory(item),
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", preview && "lg:grid-cols-4"),
			children: filteredItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCard, {
				item,
				onSelect: setSelected
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailDialog, {
			item: selected,
			open: Boolean(selected),
			onOpenChange: (open) => !open && setSelected(null),
			onAdd: addToOrder
		}),
		!preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, {
			lines,
			onRemove: (id) => setLines((current) => current.filter((line) => line.item.id !== id)),
			onClear: () => setLines([])
		})
	] });
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[calc(100vh-5rem)] border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 -z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://res.cloudinary.com/dxpquojo2/image/upload/v1788519542/butta-rush-hero_jlrvy3.jpg",
						alt: "A Butta Rush catering spread with jollof rice, chicken, small chops and cake",
						width: 1600,
						height: 1e3,
						className: "h-full w-full object-cover object-center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,var(--color-background)_0%,color-mix(in_oklab,var(--color-background)_90%,transparent)_35%,color-mix(in_oklab,var(--color-background)_20%,transparent)_100%)]" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:items-center lg:px-8 lg:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), "Catering · Cakes · Pastries"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl font-black leading-[0.98] tracking-tight text-foreground sm:text-7xl",
								children: [
									"Nigerian flavors,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "made for"
									}),
									" your next order."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",
								children: "Home-style dishes, beautifully finished cakes and party favourites prepared with care for the people and moments that matter."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-12 rounded-full px-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/menu",
										children: ["Explore the menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
									className: "h-12 rounded-full border border-border bg-background/60 px-6 text-foreground shadow-none hover:bg-background",
									children: "Order on WhatsApp"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }), " Made to order"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }), " Port Harcourt delivery"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }), " Event-ready portions"]
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border/60 bg-card py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
							children: "A taste of what we offer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-xl font-display text-4xl font-black tracking-tight sm:text-5xl",
							children: "The dishes people come back for."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "w-fit rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/menu",
								children: ["See full menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, { preview: true })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-8 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/__l5e/assets-v1/d9f16891-8513-47ea-a5e9-eb9a554873ab/butta-rush-small-chops.jpg",
							alt: "A generous platter of small chops",
							width: 1200,
							height: 1200,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-3 flex max-w-[210px] items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-right-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold leading-5",
							children: "Good food is how we say, “you’re cared for.”"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
						children: "Who’s cooking"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl",
						children: [
							"Made in our kitchen.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Shared at your table."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-xl text-base leading-8 text-muted-foreground",
						children: "Butta Rush brings the warmth of a well-loved Nigerian kitchen to everyday cravings, birthdays, office lunches and big celebrations. Every order is prepared with intention, from the first stir to the final flourish."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-8 text-muted-foreground",
						children: "Our menu is made for sharing Port Harcourt generous, joyful and easy to order. Tell us what you’re planning and we’ll help you build the spread."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "mt-6 h-auto p-0 text-base font-bold text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							children: ["Browse the full menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border/60 bg-muted/40 py-20 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
							children: "Proof, not promises"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl",
							children: "A table worth gathering around."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm leading-6 text-muted-foreground",
							children: "Temporary preview imagery for now Port Harcourt your real cakes, trays and celebrations can take this space next."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/__l5e/assets-v1/2fd6eab6-3a84-48c0-9f2e-c0dad9227212/butta-rush-cake.jpg",
								alt: "Buttercream cake detail",
								loading: "lazy",
								className: "aspect-square w-full rounded-2xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/__l5e/assets-v1/d263085a-7ace-478e-ac40-93e8e22c3def/butta-rush-jollof.jpg",
								alt: "Jollof rice with grilled chicken",
								loading: "lazy",
								className: "mt-8 aspect-square w-full rounded-2xl object-cover sm:mt-12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/__l5e/assets-v1/d9f16891-8513-47ea-a5e9-eb9a554873ab/butta-rush-small-chops.jpg",
								alt: "Small chops platter",
								loading: "lazy",
								className: "aspect-square w-full rounded-2xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/__l5e/assets-v1/b1277068-eda6-4e85-942b-ec26790cb8ae/butta-rush-hero.jpg",
								alt: "Butta Rush food spread",
								loading: "lazy",
								className: "mt-8 aspect-square w-full rounded-2xl object-cover sm:mt-12"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t-2 border-primary pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl font-bold",
									children: "Reliable by design"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: "Clear prices, thoughtful portions and an order flow that keeps the details simple."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t-2 border-gold pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl font-bold",
									children: "Made with intention"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: "From smoky jollof to custom sugar craft, every order gets the attention it deserves."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t-2 border-deep-red pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6 text-deep-red" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl font-bold",
									children: "One tap away"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: "Browse what you need, then continue naturally with us on WhatsApp."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden border-t border-border/60 bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70",
							children: "Your next gathering starts here"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-6xl",
							children: "Ready to taste something special?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-7 text-primary-foreground/75",
							children: "Not sure what to order? Chat with us and we’ll help you pick."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppButton, {
						className: "h-13 shrink-0 rounded-full bg-primary-foreground px-6 text-primary shadow-none hover:bg-primary-foreground/90",
						children: ["Start an order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})]
				})
			})
		]
	});
}
function MenuPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border/60 bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
					children: "The Butta Rush menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl font-black tracking-tight sm:text-7xl",
						children: ["Pick your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "favourite."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-7 text-muted-foreground",
						children: "Browse cakes, pastries, meals and trays. Tap any item for details, then send your order straight to WhatsApp."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-primary" }), " No account. No checkout. Just good food."]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-2xl font-bold",
					children: ["Butta Rush", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm leading-6 text-muted-foreground",
					children: "Nigerian dishes, cakes and pastries Port Harcourt made to order."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "hover:text-primary",
							children: "Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#about",
							className: "hover:text-primary",
							children: "Our story"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
					children: "Say hello"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: getWhatsAppUrl([]),
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @buttarush"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Port Harcourt, Nigeria · © 2026"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl border-t border-border/60 px-5 py-5 text-xs text-muted-foreground lg:px-8",
			children: "Made for generous tables and memorable moments."
		})]
	});
}
//#endregion
export { SiteHeader as i, MenuPage as n, SiteFooter as r, HomePage as t };
