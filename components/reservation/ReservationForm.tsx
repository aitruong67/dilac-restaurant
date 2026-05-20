"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const times = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  partySize: z.string().min(1, "Select party size"),
  requests: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
        <h3 className="font-heading text-2xl">Reservation confirmed!</h3>
        <p className="text-muted-foreground max-w-xs">
          We&apos;ve sent a confirmation to your email. We look forward to seeing you!
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="res-name">Full name</Label>
          <Input id="res-name" placeholder="Jane Smith" {...register("name")} />
          {errors.name && (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="res-email">Email</Label>
          <Input
            id="res-email"
            type="email"
            placeholder="jane@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="res-phone">Phone</Label>
        <Input
          id="res-phone"
          type="tel"
          placeholder="(03) 9000 0000"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-destructive text-xs">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="res-date">Date</Label>
          <Input
            id="res-date"
            type="date"
            min={today}
            {...register("date")}
          />
          {errors.date && (
            <p className="text-destructive text-xs">{errors.date.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label>Time</Label>
          <Select
            value={time}
            onValueChange={(v) => {
              if (!v) return;
              setTime(v);
              setValue("time", v, { shouldValidate: true });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {times.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && (
            <p className="text-destructive text-xs">{errors.time.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label>Party size</Label>
          <Select
            value={partySize}
            onValueChange={(v) => {
              if (!v) return;
              setPartySize(v);
              setValue("partySize", v, { shouldValidate: true });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "guest" : "guests"}
                </SelectItem>
              ))}
              <SelectItem value="10+">10+ guests</SelectItem>
            </SelectContent>
          </Select>
          {errors.partySize && (
            <p className="text-destructive text-xs">
              {errors.partySize.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="res-requests">Special requests (optional)</Label>
        <Textarea
          id="res-requests"
          placeholder="Dietary requirements, high chair, anniversary, etc."
          rows={3}
          {...register("requests")}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Reserving…
          </>
        ) : (
          "Confirm Reservation"
        )}
      </Button>
    </form>
  );
}
