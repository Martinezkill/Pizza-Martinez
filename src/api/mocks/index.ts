import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getDailyRevenuePeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-moks";
import { getProfileMock } from "./get-profile-moks";
import { getManagedRestaurantMock } from "./get-managed-restaurant-moks";
import { updateProfileMock } from "./update-profile-moks";
import { getOrdersMock } from "./get-orders-moks";
import { getOrderDetailsMock } from "./get-order-details-moks";
import { approveOrderMoks } from "./approve-order-moks";
import { cancelOrderMoks } from "./cancel-order-moks";
import { deliverOrderMoks } from "./deliver-order-moks";
import { dispatchOrderMoks } from "./dispatch-order-moks";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenuePeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMoks,
  cancelOrderMoks,
  deliverOrderMoks,
  dispatchOrderMoks,
);

export async function enableMSW() {
  if (env.MODE !== "test") return;
  await worker.start();
}
