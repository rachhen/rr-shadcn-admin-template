export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Order = {
  id: number;
  products: Product[];
  total: number;
  date: string;
  status: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  image: string | null;
};
