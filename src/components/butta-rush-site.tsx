import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Instagram,
  Menu as MenuIcon,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import logoAsset from "@/assets/butta-rush-logo.jpeg.asset.json";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  featuredItems,
  formatNaira,
  getWhatsAppUrl,
  menuCategories,
  menuItems,
  readStoredPickup,
  readStoredOrder,
  storePickup,
  storeOrder,
  type MenuCategory,
  type MenuItem,
  type OrderLine,
} from "@/lib/menu";

const imageAlt = (item: MenuItem) => `${item.name} from Butta Rush`;

export function WhatsAppButton({
  children = "Order on WhatsApp",
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      className={cn(
        "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
        className,
      )}
      onClick={onClick}
    >
      <a href={getWhatsAppUrl([])} target="_blank" rel="noreferrer">
        <MessageCircle />
        {children}
      </a>
    </Button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center">
          <img
            src={logoAsset.url}
            alt="Butta Rush"
            width={120}
            height={120}
            className="h-14 w-auto rounded-full"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/menu" className="transition-colors hover:text-foreground">
            Menu
          </Link>
          <a href="#about" className="transition-colors hover:text-foreground">
            Our story
          </a>
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton className="h-11 rounded-full px-5">Order now</WhatsAppButton>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[min(88vw,360px)] border-l-border bg-background p-6"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center">
              <img
                src={logoAsset.url}
                alt="Butta Rush"
                width={120}
                height={120}
                className="h-14 w-auto rounded-full"
              />
            </SheetTitle>
            <SheetDescription>
              Home-style Nigerian dishes, cakes and pastries made to order.
            </SheetDescription>
          </SheetHeader>
          <nav className="mt-10 grid gap-5 text-lg font-semibold">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/menu" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <Link to="/pickup" onClick={() => setOpen(false)}>
              Pickup
            </Link>
            <a href="#about" onClick={() => setOpen(false)}>
              Our story
            </a>
          </nav>
          <WhatsAppButton className="mt-10 w-full">Order on WhatsApp</WhatsAppButton>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function MenuCard({
  item,
  onSelect,
}: {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}) {
  return (
    <Button
      variant="ghost"
      className="group flex h-auto w-full flex-col items-stretch justify-start whitespace-normal rounded-2xl border border-border/80 bg-card p-0 text-left shadow-none hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:shadow-primary/10"
      onClick={() => onSelect(item)}
    >
      <div className="relative aspect-[1.12] w-full overflow-hidden rounded-t-2xl bg-muted">
        <img
          src={item.image}
          alt={imageAlt(item)}
          width={1200}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-border/50 bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
          {item.category}
        </span>
        {item.inquiryOnly && (
          <span className="absolute bottom-3 left-3 rounded-full bg-deep-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-deep-red-foreground">
            Inquiry only
          </span>
        )}
      </div>
      <div className="flex min-h-[154px] flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold leading-tight text-card-foreground">
            {item.name}
          </h3>
          <p className="mt-2 text-xs text-muted-foreground">{item.portion}</p>
        </div>
        <div className="mt-4 flex items-end justify-between gap-3">
          <span className="font-display text-lg font-bold text-primary">
            {item.varies && item.price
              ? `From ${formatNaira(item.price)}`
              : formatNaira(item.price)}
          </span>
          {!item.inquiryOnly && (
            <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
              View details <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </Button>
  );
}

function QuantityControl({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (quantity: number) => void;
}) {
  return (
    <div className="flex h-11 items-center rounded-full border border-border bg-muted/50 p-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, quantity - 1))}
      >
        <Minus />
      </Button>
      <span className="w-10 text-center text-sm font-bold tabular-nums">{quantity}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Increase quantity"
        onClick={() => onChange(quantity + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
}

function DetailDialog({
  item,
  open,
  onOpenChange,
  onAdd,
}: {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (item: MenuItem, quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  if (!item) return null;
  const total = (item.price ?? 0) * quantity;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto border-border bg-card p-0 sm:max-w-2xl">
        <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
          <div className="aspect-square overflow-hidden sm:aspect-auto">
            <img
              src={item.image}
              alt={imageAlt(item)}
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <DialogHeader className="text-left">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {item.category}
              </span>
              <DialogTitle className="mt-3 font-display text-3xl leading-tight">
                {item.name}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-6">
                {item.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-8 border-y border-border py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.portion}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-primary">
                    {item.varies ? `From ${formatNaira(item.price)}` : formatNaira(item.price)}
                  </p>
                </div>
                {!item.inquiryOnly && (
                  <QuantityControl quantity={quantity} onChange={setQuantity} />
                )}
              </div>
              {item.minimumOrder && (
                <p className="mt-4 text-xs font-medium text-deep-red">
                  Minimum order applies Port Harcourt confirm quantity with us on WhatsApp.
                </p>
              )}
            </div>
            {item.inquiryOnly ? (
              <WhatsAppButton className="mt-6 w-full" onClick={() => onOpenChange(false)}>
                Ask about this item
              </WhatsAppButton>
            ) : (
              <Button
                className="mt-6 h-12 w-full rounded-full"
                onClick={() => {
                  onAdd(item, quantity);
                  onOpenChange(false);
                }}
              >
                <ShoppingBag /> Add to order · {formatNaira(total)}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function OrderSummary({
  lines,
  onRemove,
  onClear,
}: {
  lines: OrderLine[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
  return (
    <>
      {lines.length > 0 && (
        <div className="fixed inset-x-0 bottom-4 z-30 mx-auto flex max-w-lg items-center gap-3 px-4 sm:bottom-6">
          <Button
            className="h-14 flex-1 rounded-full border border-primary-foreground/10 bg-primary px-5 text-primary-foreground shadow-2xl shadow-primary/25 hover:bg-primary/90"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag />
            <span className="flex-1 text-left">View your order</span>
            <span className="rounded-full bg-primary-foreground/15 px-2.5 py-1 text-xs font-bold">
              {itemCount}
            </span>
            <span className="font-display font-bold">{formatNaira(subtotal)}</span>
          </Button>
        </div>
      )}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-[min(92vw,460px)] flex-col border-l-border bg-card p-6"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="font-display text-3xl">Your order</SheetTitle>
            <SheetDescription>
              Review your picks, then send the details to Butta Rush on WhatsApp.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 flex-1 space-y-4 overflow-y-auto">
            {lines.map((line) => (
              <div key={line.item.id} className="flex gap-3 border-b border-border pb-4">
                <img src={line.item.image} alt="" className="h-16 w-16 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-tight">{line.item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {line.quantity} × {formatNaira(line.item.price)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">
                    {formatNaira((line.item.price ?? 0) * line.quantity)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-1 h-7 px-0 text-xs text-muted-foreground hover:text-destructive"
                    onClick={() => onRemove(line.item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-display text-2xl font-bold">{formatNaira(subtotal)}</span>
            </div>
            <Button asChild className="mt-5 h-12 w-full rounded-full">
              <Link
                to="/pickup"
                onClick={() => {
                  storeOrder(lines);
                  setOpen(false);
                }}
              >
                <ShoppingBag /> Set pickup details
              </Link>
            </Button>
            <Button asChild variant="outline" className="mt-2 h-12 w-full rounded-full">
              <a href={getWhatsAppUrl(lines)} target="_blank" rel="noreferrer">
                <MessageCircle /> Order without pickup
              </a>
            </Button>
            <Button variant="ghost" className="mt-2 w-full text-muted-foreground" onClick={onClear}>
              Clear order
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function Catalog({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<"All" | MenuCategory>("All");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [hasLoadedOrder, setHasLoadedOrder] = useState(false);
  useEffect(() => {
    setLines(readStoredOrder());
    setHasLoadedOrder(true);
  }, []);
  useEffect(() => {
    if (hasLoadedOrder) storeOrder(lines);
  }, [hasLoadedOrder, lines]);
  const filteredItems = useMemo(
    () =>
      preview
        ? featuredItems
        : menuItems.filter((item) => category === "All" || item.category === category),
    [category, preview],
  );
  const addToOrder = (item: MenuItem, quantity: number) =>
    setLines((current) => {
      const existing = current.find((line) => line.item.id === item.id);
      if (existing)
        return current.map((line) =>
          line.item.id === item.id ? { ...line, quantity: line.quantity + quantity } : line,
        );
      return [...current, { item, quantity }];
    });
  return (
    <>
      {!preview && (
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {menuCategories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              className={cn(
                "shrink-0 rounded-full",
                category === item && "bg-primary text-primary-foreground",
              )}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
      <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", preview && "lg:grid-cols-4")}>
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} onSelect={setSelected} />
        ))}
      </div>
      <DetailDialog
        item={selected}
        open={Boolean(selected)}
        onOpenChange={(open) => !open && setSelected(null)}
        onAdd={addToOrder}
      />
      {!preview && (
        <OrderSummary
          lines={lines}
          onRemove={(id) => setLines((current) => current.filter((line) => line.item.id !== id))}
          onClear={() => setLines([])}
        />
      )}
    </>
  );
}

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-[calc(100vh-5rem)] border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788519542/butta-rush-hero_jlrvy3.jpg"
            alt="A Butta Rush catering spread with jollof rice, chicken, small chops and cake"
            width={1600}
            height={1000}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-background)_0%,color-mix(in_oklab,var(--color-background)_90%,transparent)_35%,color-mix(in_oklab,var(--color-background)_20%,transparent)_100%)]" />
        </div>
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:items-center lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Catering · Cakes · Pastries
            </p>
            <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight text-foreground sm:text-7xl">
              Nigerian flavors,
              <br />
              <span className="text-primary">made for</span> your next order.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-foreground/90 sm:text-lg">
              Home-style dishes, beautifully finished cakes and party favourites prepared with care
              for the people and moments that matter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-6">
                <Link to="/menu">
                  Explore the menu <ArrowRight />
                </Link>
              </Button>
              <WhatsAppButton className="h-12 rounded-full border border-border bg-background/60 px-6 text-foreground shadow-none hover:bg-background">
                Order on WhatsApp
              </WhatsAppButton>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Made to order
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Port Harcourt delivery
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Event-ready portions
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                A taste of what we offer
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-black tracking-tight sm:text-5xl">
                The dishes people come back for.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <Link to="/menu">
                See full menu <ArrowRight />
              </Link>
            </Button>
          </div>
          <Catalog preview />
        </div>
      </section>
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-8 lg:py-28"
      >
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <img
              src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788674327/WhatsApp_Image_2026-09-06_at_6.58.08_AM_g4skgp.jpg"
              alt="A generous platter of small chops"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 flex max-w-[210px] items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-right-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold leading-5">
              Good food is how we say, “you’re cared for.”
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Who’s cooking</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Made in our kitchen.
            <br />
            <span className="text-primary">Shared at your table.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
            Butta Rush brings the warmth of a well-loved Nigerian kitchen to everyday cravings,
            birthdays, office lunches and big celebrations. Every order is prepared with intention,
            from the first stir to the final flourish.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
            Our menu is made for purpolar meal for people in Port Harcourt and easy to order. Tell us
            what you’re planning and we’ll help you build the spread.
          </p>
          <Button
            asChild
            variant="link"
            className="mt-6 h-auto p-0 text-base font-bold text-primary"
          >
            <Link to="/menu">
              Browse the full menu <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="border-y border-border/60 bg-muted/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Proof, not promises
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
                A table worth gathering around.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Temporary preview imagery for now Port Harcourt your real cakes, trays and
              celebrations can take this space next.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <img
              src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788518410/Simple_cake_dkchod.jpg"
              alt="Buttercream cake detail"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788617323/Perfect_Oven_Baked_Jollof_igax62.jpg"
              alt="Jollof rice with grilled chicken"
              loading="lazy"
              className="mt-8 aspect-square w-full rounded-2xl object-cover sm:mt-12"
            />
            <img
              src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788616677/Mix_brownie__.._iayofs.jpg"
              alt="Brownies cake box with chocolate drizzle"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src="https://res.cloudinary.com/dxpquojo2/image/upload/v1788616395/bakedwithlove_smallchops_surprise_partyfood_homemade_abuja_foodtrays_partytray_birthdaycake_cakes_baking_instagood_qflrf4.jpg"
              alt="Butta Rush food spread"
              loading="lazy"
              className="mt-8 aspect-square w-full rounded-2xl object-cover sm:mt-12"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="border-t-2 border-primary pt-5">
            <Truck className="h-6 w-6 text-primary" />
            <h3 className="mt-5 font-display text-2xl font-bold">Reliable by design</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Clear prices, thoughtful portions and an order flow that keeps the details simple.
            </p>
          </div>
          <div className="border-t-2 border-gold pt-5">
            <Sparkles className="h-6 w-6 text-gold" />
            <h3 className="mt-5 font-display text-2xl font-bold">Made with intention</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              From smoky jollof to custom sugar craft, every order gets the attention it deserves.
            </p>
          </div>
          <div className="border-t-2 border-deep-red pt-5">
            <MessageCircle className="h-6 w-6 text-deep-red" />
            <h3 className="mt-5 font-display text-2xl font-bold">One tap away</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Browse what you need, then continue naturally with us on WhatsApp.
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-t border-border/60 bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
              Your next gathering starts here
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-6xl">
              Ready to taste something special?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/75">
              Not sure what to order? Chat with us and we’ll help you pick.
            </p>
          </div>
          <WhatsAppButton className="h-13 shrink-0 rounded-full bg-primary-foreground px-6 text-primary shadow-none hover:bg-primary-foreground/90">
            Start an order <ArrowRight />
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}

export function MenuPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The Butta Rush menu
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-display text-5xl font-black tracking-tight sm:text-7xl">
                Pick your <span className="text-primary">favourite.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                Browse cakes, pastries, meals and trays. Tap any item for details, then send your
                order straight to WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShoppingBag className="h-4 w-4 text-primary" /> No account. No checkout. Just good
              food.
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <Catalog />
      </main>
    </div>
  );
}

const pickupTimes = Array.from({ length: 15 }, (_, index) => {
  const hour = index + 7;
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:00 ${suffix}`;
});

export function PickupPage() {
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [pickup, setPickup] = useState({ date: "", time: "", address: "" });
  const [today, setToday] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setLines(readStoredOrder());
    const storedPickup = readStoredPickup();
    if (storedPickup) setPickup(storedPickup);
    setToday(new Date().toISOString().split("T")[0] ?? "");
  }, []);

  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + (line.item.price ?? 0) * line.quantity, 0);
  const isComplete = pickup.date !== "" && pickup.time !== "" && pickup.address.trim() !== "";
  const whatsappUrl = isComplete ? getWhatsAppUrl(lines, pickup) : "#";

  if (lines.length === 0) {
    return (
      <main className="min-h-[calc(100vh-5rem)] bg-card px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <ShoppingBag className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Pickup booking
          </p>
          <h1 className="mt-4 font-display text-5xl font-black tracking-tight">
            Start with your order.
          </h1>
          <p className="mx-auto mt-5 max-w-md leading-7 text-muted-foreground">
            Choose your cakes, pastries or meals first, then come back here to reserve a pickup
            time.
          </p>
          <Button asChild className="mt-8 h-12 rounded-full px-6">
            <Link to="/menu">
              Browse the menu <ArrowRight />
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-card">
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Pickup booking
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-black tracking-tight sm:text-7xl">
            Choose when we’ll have it ready.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Pick a date between 7:00 AM and 9:00 PM, add your address, then send the full order to
            us on WhatsApp.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
        <form
          className="space-y-8"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            if (isComplete) {
              storePickup(pickup);
            }
          }}
        >
          <div>
            <label htmlFor="pickup-date" className="text-sm font-semibold">
              Pickup date
            </label>
            <input
              id="pickup-date"
              type="date"
              min={today}
              value={pickup.date}
              onChange={(event) =>
                setPickup((current) => ({ ...current, date: event.target.value }))
              }
              className="mt-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              required
            />
          </div>

          <fieldset>
            <legend className="text-sm font-semibold">Pickup time</legend>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {pickupTimes.map((time) => (
                <label key={time} className="cursor-pointer">
                  <input
                    type="radio"
                    name="pickup-time"
                    value={time}
                    checked={pickup.time === time}
                    onChange={(event) =>
                      setPickup((current) => ({ ...current, time: event.target.value }))
                    }
                    className="peer sr-only"
                  />
                  <span className="flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-2 text-sm font-medium transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                    {time}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="pickup-address" className="text-sm font-semibold">
              Pickup address
            </label>
            <textarea
              id="pickup-address"
              value={pickup.address}
              onChange={(event) =>
                setPickup((current) => ({ ...current, address: event.target.value }))
              }
              placeholder="Enter the address for this pickup"
              className="mt-3 flex min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              required
            />
          </div>

          {submitted && !isComplete && (
            <p className="text-sm font-medium text-deep-red" role="alert">
              Please choose a date, choose a time and enter an address to continue.
            </p>
          )}
          <Button type="submit" className="h-12 w-full rounded-full sm:w-auto sm:px-8">
            Review pickup details <ArrowRight />
          </Button>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-background p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Your order</p>
          <div className="mt-6 space-y-4">
            {lines.map((line) => (
              <div
                key={line.item.id}
                className="flex items-start justify-between gap-4 border-b border-border pb-4"
              >
                <div>
                  <p className="font-semibold leading-tight">{line.item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {line.quantity} × {formatNaira(line.item.price)}
                  </p>
                </div>
                <span className="shrink-0 font-bold text-primary">
                  {formatNaira((line.item.price ?? 0) * line.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </span>
            <span className="font-display text-2xl font-bold">{formatNaira(subtotal)}</span>
          </div>
          {submitted && isComplete && (
            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-6">
                  Your pickup details are ready. Send them to Butta Rush to confirm availability.
                </p>
              </div>
              <Button asChild className="mt-5 h-12 w-full rounded-full">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle /> Send order on WhatsApp
                </a>
              </Button>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src={logoAsset.url}
              alt="Butta Rush"
              width={120}
              height={120}
              className="h-12 w-auto rounded-full"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            Nigerian dishes, cakes and pastries Port Harcourt made to order.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </p>
          <div className="mt-4 grid gap-3 text-sm">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/menu" className="hover:text-primary">
              Menu
            </Link>
            <Link to="/pickup" className="hover:text-primary">
              Pickup
            </Link>
            <a href="/#about" className="hover:text-primary">
              Our story
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Say hello
          </p>
          <div className="mt-4 grid gap-3 text-sm">
            <a
              href={getWhatsAppUrl([])}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> @buttarush
            </a>

            <a
              href="https://tiktok.com/@buttarush"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaTiktok className="h-4 w-4" /> @buttarush
            </a>
            <span className="text-muted-foreground">Port Harcourt, Nigeria · © 2026</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-border/60 px-5 py-5 text-xs text-muted-foreground lg:px-8">
        Made for generous tables and memorable moments.
      </div>
    </footer>
  );
}
