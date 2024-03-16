import { test, expect } from '@playwright/experimental-ct-react';
import Page from './page';
import { HooksConfig } from '#/playwright';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount, page }) => {
  const component = await mount<HooksConfig>(<Page />, {
    hooksConfig: { routing: true },
  });
  await expect(component).toContainText('Examples');
  await component.getByRole('link', { name: 'Nested Layouts' }).click();
  await expect(page).toHaveURL('/layouts');
});
