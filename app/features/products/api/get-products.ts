import type { Product } from "~/types/models";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");

  const products = await res.json();

  return products;
};
