import { test, expect } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  expect(page.getByRole("cell", { name: "customer 1", exact: true }));
  expect(page.getByRole("cell", { name: "customer 10" }));

  await page.waitForSelector("table", { state: "visible" });
});

test("paginate orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "proxima pagina" }).click();

  expect(page.getByRole("cell", { name: "customer 11", exact: true }));
  expect(page.getByRole("cell", { name: "customer 20" }));

  await page.waitForSelector("table", { state: "visible" });
});
