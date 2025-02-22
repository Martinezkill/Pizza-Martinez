import { api } from "@/lib/axios";

interface getManagedRestaurant {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<getManagedRestaurant>("/managed-restaurant");

  return response.data;
}
