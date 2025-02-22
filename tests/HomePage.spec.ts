import { test, expect } from '@playwright/test';

test('Verify Exam days page contents', async ({ page }) => {
  const url=process.env.BASE_URL as string
  await page.goto(url)
  await page.waitForLoadState();
  await expect(page).toHaveTitle("Examdays.com - India's Best Education Job Portal - Examdays.com")
});
