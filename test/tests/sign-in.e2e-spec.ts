import { test, expect } from "@playwright/test";

test("sign in sucessfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("seu e-mail").fill("johndoe@exemple.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticacao para seu e-mail",
  );
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("seu e-mail").fill("wrong@exemple.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválida");
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("sign-up");
});
