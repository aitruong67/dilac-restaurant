import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <FeaturedMenu />
      <GalleryTeaser />

      {/* CTA strip */}
      <section className="py-20 sm:py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <p className="text-white/50 text-sm tracking-widest uppercase">
            Ready?
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl max-w-lg">
            Order now or book your table.
          </h2>
          <p className="text-white/60 max-w-sm">
            Same-day delivery until 2 pm. Dine-in reservations available daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link href="/order">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 font-semibold w-full sm:w-auto"
              >
                Order Online
              </Button>
            </Link>
            <Link href="/reservation">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
              >
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
