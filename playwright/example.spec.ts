import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('Next.js + Playwright');
    await expect(page.getByRole('heading')).toHaveText('Next.js + Playwright');
    await expect(page.getByRole('link', { name: 'Form' })).toBeVisible();
  });

  test('Should redirect to form page', async ({ page }) => {
    await page.getByRole('link', { name: 'Form' }).click();
    await expect(page).toHaveURL('http://localhost:3000/form');
    await expect(page.getByText('Form')).toBeVisible();
    await expect(page).toHaveTitle('Form');
  });
});

test.describe('Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/form');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('Form');
    await expect(page.getByText('Form')).toBeVisible();
    await expect(page.getByPlaceholder('Enter text')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });

  test('Should have empty list', async ({ page }) => {
    const todoList = page.getByTestId('todo-list');
    await expect(todoList).toBeEmpty();
  });

  test('Should add item to list and clear input', async ({ page }) => {
    const todoInput = page.getByPlaceholder('Enter text');

    await todoInput.fill('Item 1');

    await page.getByRole('button', { name: 'Submit' }).click();

    const item = page.getByTestId('item');

    await expect(item).toHaveText('Item 1');

    await expect(todoInput).toBeEmpty();
  });
});
