import { test, expect } from '@playwright/experimental-ct-react';
import CountUp from './count-up';
import { HooksConfig } from '#/playwright';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount<HooksConfig>(<CountUp start={0} end={10} />, {
    hooksConfig: { routing: true },
  });

  await expect(component.getByText('10')).toBeVisible();
});
