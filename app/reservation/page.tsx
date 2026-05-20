import type { Metadata } from "next";
import ReservationForm from "@/components/reservation/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations — DiLac Restaurant",
  description: "Book a table at DiLac. Available for lunch and dinner daily.",
};

export default function ReservationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
            Book a table
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl mb-3">
            Reservations
          </h1>
          <p className="text-muted-foreground">
            Reserve your spot and we&apos;ll take care of the rest. Walk-ins are always
            welcome, subject to availability.
          </p>
        </header>

        <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
          <ReservationForm />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="font-medium text-foreground mb-1">Lunch service</p>
            <p>11:00 am – 3:00 pm, daily</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="font-medium text-foreground mb-1">Dinner service</p>
            <p>5:00 pm – close, daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}
