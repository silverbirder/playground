// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
//   const { baseURL, storageState } = config.projects[0].use;
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto(baseURL!);
//   await page.fill('input[name="user"]', 'user');
//   await page.fill('input[name="password"]', 'password');
//   await page.click('text=Sign in');
//   await page.context().storageState({ path: storageState as string });
//   await browser.close();
    console.log('globalSetup');
}

export default globalSetup;