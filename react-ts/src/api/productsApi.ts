const BASE_URL = "https://localhost:7233/api/products";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createProduct = async (product: Omit<Product, "id">) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
};

export const deleteProduct = async (id: number) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
