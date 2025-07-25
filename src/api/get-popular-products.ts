import { api } from "@/lib/axios";

export type GetPopularProductsResponseResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponseResponse>(
    "/metrics/popular-products",
  );

  return response.data;
}
