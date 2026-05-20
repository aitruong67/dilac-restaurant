"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[560px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=85"
        alt="Vibrant vegetarian spread at DiLac Restaurant"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
            100% Plant-Based Kitchen
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Fresh food,{" "}
            <em className="italic">bold</em>{" "}
            flavours.
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-sm">
            Casual vegetarian dining, daily delivery, and takeout — made with
            seasonal ingredients and a lot of love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/order">
              <Button size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 font-semibold">
                Order Online
              </Button>
            </Link>
            <Link href="/reservation">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 bg-transparent"
              >
                Reserve a Table
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
