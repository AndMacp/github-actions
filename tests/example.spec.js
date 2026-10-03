// @ts-check
import { test, expect } from '@playwright/test';
import { NavigationObjectClass } from './pages/navigation';

test('Test github workflows', async ({ page }) => {
  await page.goto('/');

  const navigationObject = new NavigationObjectClass(page)
  
 const homepageTitle = await navigationObject.getTitle().textContent()

expect(homepageTitle).toBe('ull-stack developer')

   await page.getByRole('link', { name: 'About me' }).click()

  await expect(page).toHaveURL('https://macipura.com/#about-me')
});
