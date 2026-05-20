"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredItems } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";
import { MenuItem } from "@/lib/types";

function AddButton({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center hover:scale-110 transition-transform shrink-0"
      aria-label={`Add ${item.name} to cart`}
    >
      {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
    </button>
  );
}

export default function FeaturedMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl mb-2">
              Customer Favourites
            </h2>
            <p className="text-muted-foreground">
              The dishes our regulars keep coming back for.
            </p>
          </div>
          <Link href="/menu">
            <Button variant="outline">View Full Menu</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 flex gap-1">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/90 text-foreground text-[10px] px-1.5 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">
                    ${item.price.toFixed(2)}
                  </span>
                  <AddButton item={item} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
