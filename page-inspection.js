import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('contentinfo').click();
  await page.goto('chrome-error://chromewebdata/');
});