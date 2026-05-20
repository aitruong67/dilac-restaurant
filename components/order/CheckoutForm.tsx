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
import OrderTypeToggle from "./OrderTypeToggle";
import { useCart } from "@/lib/cart-context";
import { OrderType } from "@/lib/types";

const schema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(8, "Enter a valid phone number"),
    orderType: z.enum(["delivery", "pickup"]),
    address: z.string().optional(),
    deliveryTime: z.string().min(1, "Select a delivery time"),
    notes: z.string().optional(),
  })
  .refine(
    (data) =>
      data.orderType === "pickup" || (data.address && data.address.length > 4),
    { message: "Delivery address is required", path: ["address"] }
  );

type FormData = z.infer<typeof schema>;

export default function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { orderType: "delivery" },
  });

  const handleTypeChange = (v: OrderType) => {
    setOrderType(v);
    setValue("orderType", v);
  };

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
        <h3 className="font-heading text-2xl">Order received!</h3>
        <p className="text-muted-foreground max-w-xs">
          Thank you! We&apos;ll confirm your order by email shortly.
          {orderType === "delivery" && " Estimated delivery: 45–60 minutes."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label className="mb-2 block">Order type</Label>
        <OrderTypeToggle value={orderType} onChange={handleTypeChange} />
        <input type="hidden" {...register("orderType")} value={orderType} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Jane Smith" {...register("name")} />
          {errors.name && (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
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
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(03) 9000 0000"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-destructive text-xs">{errors.phone.message}</p>
        )}
      </div>

      {orderType === "delivery" && (
        <div className="space-y-1.5">
          <Label htmlFor="address">Delivery address</Label>
          <Input
            id="address"
            placeholder="123 Main St, Suburb VIC 3000"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-destructive text-xs">{errors.address.message}</p>
          )}
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="deliveryTime">
          {orderType === "delivery" ? "Delivery time" : "Pickup time"}
        </Label>
        <Input id="deliveryTime" type="time" {...register("deliveryTime")} />
        {errors.deliveryTime && (
          <p className="text-destructive text-xs">
            {errors.deliveryTime.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Special instructions (optional)</Label>
        <Textarea
          id="notes"
          placeholder="Allergies, dietary preferences, gate code…"
          rows={3}
          {...register("notes")}
        />
      </div>

      <div className="pt-2 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground text-sm">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting || items.length === 0}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Placing order…
            </>
          ) : (
            `Place Order — $${totalPrice.toFixed(2)}`
          )}
        </Button>
      </div>
    </form>
  );
}
