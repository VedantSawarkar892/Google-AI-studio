export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  path: string;
  price: number;
}

export interface Store {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  address: string;
}

export interface CartItem extends Product {
  quantity: number;
}
