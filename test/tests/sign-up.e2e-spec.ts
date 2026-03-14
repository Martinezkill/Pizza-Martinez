import { test, expect } from "@playwright/test";

test("sign up sucessfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Pizza shop");
  await page.getByLabel("Seu nome").fill("John doe");
  await page.getByLabel("seu e-mail").fill("johndoe@exemple.com");
  await page.getByLabel("Seu celular").fill("8877-8877");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso");

  expect(toast).toBeVisible();
  await page.waitForTimeout(5000);
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Invalid name");
  await page.getByLabel("Seu nome").fill("John doe");
  await page.getByLabel("seu e-mail").fill("johndoe@exemple.com");
  await page.getByLabel("Seu celular").fill("8877-8877");

  const toast = page.getByText("Erro ao cadastar o restaurante");
});

test("navigate to new login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("sign-in");
});
