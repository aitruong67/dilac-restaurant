"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "./MenuCard";
import { menuItems } from "@/lib/menu-data";
import { MenuCategory } from "@/lib/types";

const categories: MenuCategory[] = ["Starters", "Mains", "Desserts", "Drinks"];

export default function MenuTabs() {
  return (
    <Tabs defaultValue="Starters">
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <TabsList className="h-auto bg-transparent p-0 gap-0 overflow-x-auto flex-nowrap w-full justify-start rounded-none">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-5 py-3 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((cat) => {
        const items = menuItems.filter((i) => i.category === cat);
        return (
          <TabsContent key={cat} value={cat} className="mt-8 outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
