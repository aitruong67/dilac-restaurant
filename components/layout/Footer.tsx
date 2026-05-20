import Link from "next/link";
import { Leaf } from "lucide-react";

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
  { href: "/reservation", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Monday – Thursday", time: "11:00 am – 9:00 pm" },
  { day: "Friday – Saturday", time: "11:00 am – 10:00 pm" },
  { day: "Sunday", time: "10:00 am – 8:00 pm" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-white/80" />
              <span className="font-heading text-2xl">DiLac</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Fresh vegetarian cuisine crafted with seasonal ingredients.
              Dine-in, takeout &amp; daily delivery.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: "Instagram", initial: "IG" },
                { label: "Facebook", initial: "FB" },
                { label: "TikTok", initial: "TT" },
              ].map(({ label, initial }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors text-[10px] font-semibold tracking-tight"
                >
                  {initial}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Hours
            </h3>
            <ul className="space-y-3">
              {hours.map(({ day, time }) => (
                <li key={day}>
                  <p className="text-sm font-medium text-white/90">{day}</p>
                  <p className="text-sm text-white/50">{time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Find Us
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>123 Garden Street</p>
              <p>Melbourne, VIC 3000</p>
              <p className="pt-1">
                <a
                  href="tel:+61390001234"
                  className="hover:text-white transition-colors"
                >
                  (03) 9000 1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@dilac.com.au"
                  className="hover:text-white transition-colors"
                >
                  hello@dilac.com.au
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} DiLac Restaurant. All rights reserved.</p>
          <p>100% plant-based kitchen</p>
        </div>
      </div>
    </footer>
  );
}
