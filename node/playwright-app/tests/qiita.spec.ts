import { test, expect } from '@playwright/test';
test.use({ storageState: 'qiita.json' });
test('test', async ({ page }) => {
  // Go to https://qiita.com/
  await page.goto('https://qiita.com/');
  // Click text=Login >> nth=0
  await expect(page).toHaveURL('https://qiita.com/');
  // Click img[alt="silverbirder"]
  await page.locator('img[alt="silverbirder"]').click();
  // Click text=設定
  await page.locator('text=設定').click();
  await expect(page).toHaveURL('https://qiita.com/settings/account');
});