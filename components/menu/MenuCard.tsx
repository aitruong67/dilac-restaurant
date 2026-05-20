"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { MenuItem } from "@/lib/types";

const tagLabel: Record<string, string> = {
  V: "Vegan",
  GF: "Gluten-Free",
  Spicy: "Spicy",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="group flex gap-4 p-4 rounded-xl border border-border bg-white hover:shadow-md transition-shadow">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="96px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-sm truncate">{item.name}</h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] px-1.5 py-0 h-4"
                >
                  {tagLabel[tag] ?? tag}
                </Badge>
              ))}
            </div>
          </div>
          <span className="font-semibold text-sm shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed mt-2 line-clamp-2">
          {item.description}
        </p>
        <button
          onClick={handleAdd}
          className="mt-3 flex items-center gap-1.5 text-xs font-medium text-foreground hover:opacity-70 transition-opacity"
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-600" />
              <span className="text-green-600">Added!</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              Add to order
            </>
          )}
        </button>
      </div>
    </div>
  );
}
