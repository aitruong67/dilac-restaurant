"use client";

import Link from "next/link";
import Image from "next/image";
import { Info, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CheckoutForm from "@/components/order/CheckoutForm";
import { useCart } from "@/lib/cart-context";

export default function OrderPageClient() {
  const { items, updateQty, removeItem, totalPrice } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          Online ordering
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl">Order Online</h1>
      </header>

      {/* Delivery banner */}
      <div className="flex items-start gap-2 p-4 rounded-xl bg-muted/60 border border-border mb-8 text-sm">
        <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
        <p className="text-muted-foreground">
          <strong className="text-foreground">Order by 2:00 pm</strong> for
          same-day delivery. We deliver within 10 km of our restaurant.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link href="/menu">
            <Button variant="outline">Browse Menu</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl mb-5">Your Order</h2>
            <ul className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-4 bg-white">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-sm">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-semibold text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-4 bg-muted/40 rounded-xl flex items-center justify-between">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <Separator className="my-4" />
            <Link href="/menu">
              <Button variant="outline" className="w-full">
                + Add more items
              </Button>
            </Link>
          </div>

          {/* Checkout */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl mb-5">Checkout</h2>
            <div className="bg-white border border-border rounded-2xl p-6">
              <CheckoutForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
