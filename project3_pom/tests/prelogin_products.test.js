import {test, expect } from '@playwright/test';
import {productScreen} from '../Pages/products.page.ts';
import { loginScreen } from '../Pages/prelogin.home.page.js';
const testdata1 = require('C:/Users/kbala/OneDrive/Desktop/Playwright_Practice-master (1)/Playwright_Practice-master/project3_pom/Testdata/standarduser.json')
const testdata4 = require('../project3_pom/Testdata/performanceuser.json')

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    });

test('test1- successful login as a standard user- log out', async ({ page }) => {
    const sigInScreen=new loginScreen(page)
    await sigInScreen.type_username(testdata1.username1)
    await sigInScreen.type_password(testdata1.password1)
    await sigInScreen.click_submit()
   
    const productpage=new productScreen()
    await productpage.assert_pagetitle() //assert the products screen page title
    await productpage.actions_logout()
})

test('test2- successful login as a performance glitch user', async ({ page }) => {
    test.setTimeout(100000);
    const sigInScreen=new loginScreen (page)
    await sigInScreen.username_freetextField(testdata4.username4)
    await sigInScreen.password_freetextField(testdata4.password4)
    await sigInScreen.login_Button()
   
    const productpage=new productScreen(page)
    await productpage.assert_pagetitle()  //assert the products screen page title
    await productpage.actions_logout()
})


