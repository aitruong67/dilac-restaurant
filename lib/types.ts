export type DietaryTag = "V" | "GF" | "Spicy";

export type MenuCategory = "Starters" | "Mains" | "Desserts" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  tags: DietaryTag[];
  featured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type OrderType = "delivery" | "pickup";

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  orderType: OrderType;
  address?: string;
  deliveryTime: string;
  notes?: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  requests?: string;
}
