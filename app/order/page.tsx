import type { Metadata } from "next";
import OrderPageClient from "./OrderPageClient";

export const metadata: Metadata = {
  title: "Order Online — DiLac Restaurant",
  description: "Order fresh vegetarian food for delivery or pickup. Same-day delivery available.",
};

export default function OrderPage() {
  return <OrderPageClient />;
}
