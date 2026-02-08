import { Product, Store } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'gin-tonic',
    title: "Gin & Tonic",
    description: "Fresh Rosemary Infusion",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80",
    accent: "blue",
    path: "/gin-tonic",
    price: 12.99
  },
  {
    id: 'rum-latte',
    title: "Rum Latte",
    description: "Coffee, Hazelnut, and Vanilla blend",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b5c5090c?auto=format&fit=crop&w=800&q=80",
    accent: "pink",
    path: "/rum-latte",
    price: 13.99
  },
  {
    id: 'vodka-mule',
    title: "Vodka Mule",
    description: "Ginger and Lime kick",
    image: "https://images.unsplash.com/photo-1530991037538-0e6312788e4e?auto=format&fit=crop&w=800&q=80",
    accent: "green",
    path: "/vodka-mule",
    price: 12.99
  },
  {
    id: 'whiskey-collins',
    title: "Whiskey Collins",
    description: "Apple and Cinnamon profile",
    image: "https://images.unsplash.com/photo-1549462828-9759d54e48c8?auto=format&fit=crop&w=800&q=80",
    accent: "orange",
    path: "/whiskey-collins",
    price: 14.99
  },
  {
    id: 'liit',
    title: "LIIT",
    description: "5-Spirit Classic with Lime & Cola",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    accent: "yellow",
    path: "/liit",
    price: 15.99
  }
];

export const STORES: Store[] = [
  {
    id: 1,
    name: "Luxury Spirits Mumbai",
    lat: 19.0760,
    lng: 72.8777,
    type: "Retailer",
    address: "Bandra West, Mumbai, MH"
  },
  {
    id: 2,
    name: "The Cocktail Club Goa",
    lat: 15.2993,
    lng: 74.1240,
    type: "Partner Bar",
    address: "Anjuna, Goa"
  },
  {
    id: 3,
    name: "Delhi Duty Free",
    lat: 28.5562,
    lng: 77.1000,
    type: "Retailer",
    address: "Terminal 3, IGI Airport, New Delhi"
  },
  {
    id: 4,
    name: "Bangalore Social",
    lat: 12.9716,
    lng: 77.5946,
    type: "Partner Bar",
    address: "Indiranagar, Bangalore, KA"
  }
];

// Helper to prevent broken images if local files are missing
export const getFallbackImage = (title: string) => {
  const seed = title.replace(/[^a-zA-Z]/g, '');
  return `https://picsum.photos/seed/${seed}cocktail/800/1000`;
};