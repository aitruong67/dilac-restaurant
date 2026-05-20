import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Gallery — DiLac Restaurant",
  description: "See our food and dining space — fresh, colourful, and made to be shared.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          The DiLac experience
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl">Gallery</h1>
        <p className="text-muted-foreground mt-3 max-w-md">
          Every dish starts as a work of art. Here&apos;s proof.
        </p>
      </header>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className="relative break-inside-avoid rounded-xl overflow-hidden bg-muted"
            style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "4/3" : "1/1" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
