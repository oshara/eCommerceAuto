import {test,expect} from '@playwright/test';

test('register to the app',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/');
    await page.locator('.ico-register').click();

    await page.locator('#gender-female').click();

    await page.locator('#FirstName').click();
    await page.fill('#FirstName','Sam');

    await page.locator('#LastName').click();
    await page.fill('#LastName','Smith');

    await page.locator('select[name="DateOfBirthDay"]').selectOption('1');
    await page.locator('select[name="DateOfBirthMonth"]').selectOption('January');
    await page.locator('select[name="DateOfBirthYear"]').selectOption('1992');

    await page.locator('#Email').fill('test@gmail.com');

    await page.locator('#Company').fill('Tedex');

    await page.locator('#Password','New@123');//
    await page.locator('#ConfirmPassword','New@123');

    await page.locator('#register-button').click();
})