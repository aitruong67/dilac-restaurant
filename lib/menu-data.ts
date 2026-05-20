import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  // ── Salads ───────────────────────────────────────────────────────────────
  {
    id: "sal1",
    name: "Lotus Rootlets Salad",
    description:
      "Shredded lotus rootlets, basil and mint leaves, and crushed peanuts tossed in sour vinaigrette sauce. Served with tapioca crackers.",
    price: 15.45,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "sal2",
    name: "Nirvana Gourmet Salad",
    description:
      "Shredded green apple, platina banana, cucumber, carrots, onion, fried onion, basil, mint leaves, and crushed peanuts. Tossed in light sweet and sour vinaigrette sauce. Served with tapioca crackers.",
    price: 15.45,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    tags: ["V", "GF"],
    featured: true,
  },
  {
    id: "sal3",
    name: "Gourmet Thai Beef Salad",
    description:
      "Sliced vegan beef over shredded platina banana, green apple, cucumber, tomato, onion, basil, mint leaves, and crushed peanuts. Tossed in lemon dressing and served with rice crackers.",
    price: 15.45,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tags: ["V"],
    featured: true,
  },

  // ── Soups & Noodles ──────────────────────────────────────────────────────
  {
    id: "sn1",
    name: "Crispy Chowmein & Soy BBQ Pork",
    description:
      "Crispy wheat noodle with stir-fried vegetables, tofu, seitan, bean sprout, mushrooms, cilantro, and onion in the Di Lac sauce.",
    price: 14.75,
    category: "Soups & Noodles",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "sn2",
    name: "Shrimp Meat Rice Noodle Soup",
    description:
      "\"My Tho\" rice noodle with golden tofu, mushroom, veggie seafoods, freshly made vegetable broth, fried onion, and garlic. Served with bean sprouts, mint, basil, lemon, and jalapeño.",
    price: 14.75,
    category: "Soups & Noodles",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "sn3",
    name: "Pan Fried Chow-Fun & Soy BBQ Pork",
    description:
      "Flat rice noodle, tofu, mixed vegetables, mushroom, veggie ball, bean sprouts, ham, Di Lac sauce, and hot chili.",
    price: 14.75,
    category: "Soups & Noodles",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3b28?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "sn4",
    name: "Crab Vermicelli Soup",
    description:
      "Vietnamese rice noodle, veggie crab meat, daikon, carrot, asparagus, tofu, mushroom, cilantro, fried onion, and freshly made vegetable broth.",
    price: 14.75,
    category: "Soups & Noodles",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    tags: ["V", "GF"],
  },

  // ── Rice Dishes ──────────────────────────────────────────────────────────
  {
    id: "rice1",
    name: "Gourmet Fried Rice",
    description:
      "Fried rice with tofu, mixed vegetables, ham, peas, and carrots.",
    price: 14.95,
    category: "Rice Dishes",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80",
    tags: ["V"],
    featured: true,
  },
  {
    id: "rice2",
    name: "Fried Rice with Salted Fish",
    description:
      "Fried rice with veggie salted fish, cabbage, onion, garlic, ginger, and tofu.",
    price: 14.95,
    category: "Rice Dishes",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "rice3",
    name: "Grilled Veggie Pork & Shredded Tofu over Broken Rice",
    description:
      "Broken rice, grilled pork, shredded tofu plus imitation beef. Served with salad, cucumber, tomato, a cup of soup, and veggie fish sauce.",
    price: 14.95,
    category: "Rice Dishes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "rice4",
    name: "Roasted Chicken Over Rice",
    description:
      "Veggie roasted chicken with special house sauce. Served with jasmine rice.",
    price: 14.95,
    category: "Rice Dishes",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "rice5",
    name: "Kung Pao Chicken Over Rice",
    description:
      "Veggie chicken sautéed with red and green bell peppers, peanuts, sesame oil, cashew, and finely sliced onions. Served with jasmine rice.",
    price: 14.95,
    category: "Rice Dishes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    tags: ["V", "GF"],
  },

  // ── House Specialties ────────────────────────────────────────────────────
  {
    id: "hs1",
    name: "Veggie Roasted Duck with Sweet Buns",
    description:
      "Vegan smoked duck with steamed buns and scallion green onions. Includes house-made dipping sauce for your enjoyment.",
    price: 15.95,
    category: "House Specialties",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    tags: ["V"],
    featured: true,
  },
  {
    id: "hs2",
    name: "Deep Fried Fish Filet in Ginger Sauce",
    description:
      "Deep fried fish filet wrapped in seaweed bean curd. Served with ginger veggie fish sauce, chili, and salad.",
    price: 15.75,
    category: "House Specialties",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "hs3",
    name: "Gourmet Shaken Cubed Beef",
    description:
      "Veggie beef cut into bite-sized square cubes, sautéed with fresh mushroom and red and green bell peppers. Served with romaine lettuce, cucumber, tomato, and cilantro.",
    price: 16.15,
    category: "House Specialties",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "hs4",
    name: "Mongolian Beef",
    description:
      "Veggie beef slices sautéed with red and green bell peppers and house sauce.",
    price: 14.95,
    category: "House Specialties",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3b28?w=600&q=80",
    tags: ["V"],
    featured: true,
  },

  // ── Vegetables & Tofu ────────────────────────────────────────────────────
  {
    id: "vt1",
    name: "Thai Style Tofu with Eggplant & Sweet Basil",
    description:
      "Deep fried Chinese eggplant sautéed with tofu and sweet basil in vegetarian tom yum soup paste sauce.",
    price: 14.95,
    category: "Vegetables & Tofu",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "vt2",
    name: "Spicy Lemongrass Tofu",
    description:
      "Tofu, green and red bell peppers, and carrots stir-fried in spicy lemongrass sauce.",
    price: 14.95,
    category: "Vegetables & Tofu",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    tags: ["V", "GF", "Spicy"],
  },
  {
    id: "vt3",
    name: "Tofu with Black Bean or Hot Bean Sauce",
    description:
      "Tofu, green and red bell peppers, and carrots stir-fried in salted black bean or spicy bean sauce.",
    price: 14.95,
    category: "Vegetables & Tofu",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    tags: ["V", "GF"],
  },

  // ── Milk Tea ─────────────────────────────────────────────────────────────
  {
    id: "mt1",
    name: "Besame Matcha",
    description:
      "Premium matcha green milk tea paired with red bean. So delicious you'll be kissing this drink till the last drop.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt2",
    name: "Flower Child",
    description:
      "Rose milk tea paired with honey boba. This floral, delicate tea will take you back to the summer of love. Flower crown not included.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt3",
    name: "Loopy Fruipy",
    description:
      "Earl grey milk tea with fruit loops. Our own spin on a classic. Paired with honey boba.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt4",
    name: "Okurr",
    description:
      "Jasmine milk tea with an Oreo twist. Paired with honey boba. Cardi B approved (although don't fact check us on that).",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt5",
    name: "Takes Two to Mango",
    description:
      "Mango green milk tea with aloe vera. Smooth, flavorful, and refreshing.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80",
    tags: ["V"],
    featured: true,
  },
  {
    id: "mt6",
    name: "The OG",
    description:
      "Classic black milk tea made with premium loose leaf tea. Paired with honey boba. Simple. Elegant. Thirst quenching.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt7",
    name: "Vietnamese Coffee Milk Ice",
    description:
      "Vietnamese coffee mixed with milk and served over ice, with a distinct strong coffee and sweetened condensed milk.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    tags: ["V"],
  },
  {
    id: "mt8",
    name: "Winspiration",
    description:
      "Winter melon black tea — hydrating with slightly sweet undertones. Paired with honey boba.",
    price: 6.95,
    category: "Milk Tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tags: ["V"],
  },

  // ── Fruit Tea ────────────────────────────────────────────────────────────
  {
    id: "ft1",
    name: "Chiaya Boy",
    description:
      "Guava and mango black tea with crystal boba and chia seeds. A refreshing combination with a satisfying mouthfeel.",
    price: 6.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "ft2",
    name: "Guavajito",
    description:
      "Guava green tea with a fizzy kick. Paired with rainbow jelly and mint. So refreshing you'll think you're poolside.",
    price: 6.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "ft3",
    name: "High Passion",
    description:
      "Passion fruit and mango green tea paired with aloe vera. Very in right now. Very high passion.",
    price: 6.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "ft4",
    name: "It's Litchee",
    description:
      "Lychee black tea paired with passion fruit chunks and rainbow jelly. It's LITCHEE. Need we say more?",
    price: 6.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "ft5",
    name: "Okey Dokey Artichokey",
    description:
      "Our signature drink. Artichoke chrysanthemum tea with aloe vera. Only we can make artichoke taste this dang good.",
    price: 5.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tags: ["V", "GF"],
  },
  {
    id: "ft6",
    name: "PeachTea, Do You Love Me?",
    description:
      "House-brewed black tea with peach and passion fruit. Paired with crystal pearls.",
    price: 6.95,
    category: "Fruit Tea",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80",
    tags: ["V", "GF"],
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    alt: "Vibrant vegetarian bowl",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    alt: "Fresh salad with herbs",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Di Lac signature dishes",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    alt: "Vietnamese noodle soup",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "Rice dish close-up",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3b28?w=800&q=80",
    alt: "Stir-fried noodles",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
    alt: "Premium matcha milk tea",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80",
    alt: "Colourful fruit teas",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "House specialty dish",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80",
    alt: "Fried rice with vegetables",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
    alt: "Crab vermicelli soup",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80",
    alt: "Refreshing craft drinks",
  },
];
