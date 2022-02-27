import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  // Click strong:has-text("日本語")
  await page.locator('strong:has-text("日本語")').click();
  await expect(page).toHaveURL('https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8');
  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  // Select ja
  await page.locator('select[name="language"]').selectOption('ja');
  // Click button:has-text("Search")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://ja.wikipedia.org/wiki/%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC' }*/),
    page.locator('button:has-text("Search")').click()
  ]);
});