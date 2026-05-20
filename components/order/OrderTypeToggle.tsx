"use client";

import { Truck, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { OrderType } from "@/lib/types";

interface Props {
  value: OrderType;
  onChange: (v: OrderType) => void;
}

export default function OrderTypeToggle({ value, onChange }: Props) {
  return (
    <div className="flex rounded-xl border border-border overflow-hidden">
      {(["delivery", "pickup"] as OrderType[]).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onChange(type)}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors",
            value === type
              ? "bg-foreground text-white"
              : "bg-white text-muted-foreground hover:bg-muted"
          )}
        >
          {type === "delivery" ? (
            <Truck className="w-4 h-4" />
          ) : (
            <ShoppingBag className="w-4 h-4" />
          )}
          {type === "delivery" ? "Delivery" : "Pickup"}
        </button>
      ))}
    </div>
  );
}
