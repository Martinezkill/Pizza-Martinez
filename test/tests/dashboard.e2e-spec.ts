import { test, expect } from "@playwright/test";

test("display day orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relacao a ontem")).toBeVisible();
});

test("display month orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("200", { exact: true })).toBeVisible();
  expect(page.getByText("+7% em relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("5", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month revenue metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("2000", { exact: true })).toBeVisible();
  expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();
});
function getByText(arg0: string, arg1: { exact: boolean }) {
  throw new Error("Function not implemented.");
}
