import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Inject fake tokens into localStorage to bypass Google auth
  const fakeTokens = {
    access_token: 'fake_access_token',
    refresh_token: 'fake_refresh_token',
    token_type: 'Bearer',
    expires_in: 3600,
    expiry_date: Date.now() + 3600 * 1000
  };
  await page.addInitScript(token => {
    localStorage.setItem('time_alloc_tokens', JSON.stringify(token));
  }, fakeTokens);
});

test('loads app and shows Timings page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Timings')).toBeVisible({ timeout: 10000 });
  // take a screenshot for inspection
  await page.screenshot({ path: 'playwright-timings.png', fullPage: true });
});
