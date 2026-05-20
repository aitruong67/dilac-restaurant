import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — DiLac Restaurant",
  description: "Find us at 123 Garden Street, Melbourne. Call, email, or drop in.",
};

const hours = [
  { day: "Monday – Thursday", time: "11:00 am – 9:00 pm" },
  { day: "Friday – Saturday", time: "11:00 am – 10:00 pm" },
  { day: "Sunday", time: "10:00 am – 8:00 pm" },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-12">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          Come say hello
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl">Contact</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex gap-3 p-5 rounded-xl border border-border">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm mb-0.5">Location</p>
                <p className="text-sm text-muted-foreground">
                  123 Garden Street
                  <br />
                  Melbourne VIC 3000
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-5 rounded-xl border border-border">
              <Phone className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm mb-0.5">Phone</p>
                <a
                  href="tel:+61390001234"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  (03) 9000 1234
                </a>
              </div>
            </div>
            <div className="flex gap-3 p-5 rounded-xl border border-border">
              <Mail className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm mb-0.5">Email</p>
                <a
                  href="mailto:hello@dilac.com.au"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  hello@dilac.com.au
                </a>
              </div>
            </div>
            <div className="flex gap-3 p-5 rounded-xl border border-border">
              <Clock className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm mb-1">Hours</p>
                <ul className="space-y-1">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/80">
                        {day}
                      </span>
                      <br />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2!2d144.96!3d-37.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzM2LjAiUyAxNDTCsDU3JzM2LjAiRQ!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DiLac Restaurant location"
            />
          </div>
        </div>

        {/* Right — contact form */}
        <div>
          <h2 className="font-heading text-2xl mb-6">Send us a message</h2>
          <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
