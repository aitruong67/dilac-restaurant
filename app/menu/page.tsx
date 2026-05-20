import type { Metadata } from "next";
import MenuTabs from "@/components/menu/MenuTabs";

export const metadata: Metadata = {
  title: "Menu — DiLac Restaurant",
  description: "Browse our full vegetarian menu: starters, mains, desserts, and drinks.",
};

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          What we serve
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl">Our Menu</h1>
        <p className="text-muted-foreground mt-3 max-w-md">
          Everything is 100% vegetarian. Items marked{" "}
          <strong className="text-foreground">GF</strong> are gluten-free.
        </p>
      </header>
      <MenuTabs />
    </div>
  );
}
