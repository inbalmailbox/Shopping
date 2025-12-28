const BASE_URL = "https://localhost:7233/api/categories";

export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const res = await fetch(
    `https://localhost:7233/api/categories/${categoryId}/products`
  );
  return res.json();
};

