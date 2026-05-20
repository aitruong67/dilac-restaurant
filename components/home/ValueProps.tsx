"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Truck, UtensilsCrossed } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Vegetarian",
    description:
      "Every dish is crafted from fresh, seasonal produce. No compromises, full flavour — because plants can be extraordinary.",
  },
  {
    icon: Truck,
    title: "Daily Delivery",
    description:
      "Order by 2 pm for same-day delivery. Fresh meals brought to your door, seven days a week.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dine In or Takeout",
    description:
      "A warm, welcoming space for solo lunches, family dinners, or everything in between. Always feel at home.",
  },
];

export default function ValueProps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-24 bg-muted/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl sm:text-5xl mb-3">
            Why DiLac?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We believe good food should be good for you and the planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
