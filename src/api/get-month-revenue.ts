import { api } from "@/lib/axios";

export interface GetMonthRevenueResponseResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueResponseResponse>(
    "/metrics/month-receipt",
  );

  return response.data;
}
