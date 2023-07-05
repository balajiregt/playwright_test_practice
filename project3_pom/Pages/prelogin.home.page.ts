import { expect, Locator, Page } from '@playwright/test';
export class loginScreen {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submit: Locator
    
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.submit = page.locator('#login-button')
    }

    async type_username(testdata1:string){
       await this.username.type(testdata1)
    }
    
    async type_password() {
        await this.password.click()
    }
    async click_submit() {
      await this.submit.click()
    }

    
}