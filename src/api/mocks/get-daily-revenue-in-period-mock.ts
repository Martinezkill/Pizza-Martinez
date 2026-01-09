import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenuePeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/01/2025", receipt: 2000 },
    { date: "02/01/2025", receipt: 200 },
    { date: "03/01/2025", receipt: 4500 },
    { date: "04/01/2025", receipt: 2700 },
    { date: "05/01/2025", receipt: 2078 },
    { date: "06/01/2025", receipt: 740 },
    { date: "07/01/2025", receipt: 900 },
  ]);
});
