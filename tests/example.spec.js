// @ts-check
import { test, expect } from '@playwright/test';

test('Test github workflows', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'About me' }).click()

  await expect(page).toHaveURL('https://macipura.com/#about-me')
});
