import { test, expect } from "@playwright/test";

test("update profile succesfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByText("Nome").fill("Rocket Pizza");
  await page.getByText("Descricao").fill("Another Description");

  await page.getByRole("button", { name: "Salvar", exact: true }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  await expect(
    page.getByRole("button", { name: "Rocket Pizza" }),
  ).toBeVisible();
});
