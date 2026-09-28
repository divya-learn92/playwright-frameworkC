import {page} from "@playwright/test"
import { BasePage } from "./BasePage";
export class LoginPage extends BasePage{

    constructor(page){
    
        super(page)        
        this.page=page;
        this.usernameField = page.getByPlaceholder("Enter Email");
        this.passwordField = page.getByPlaceholder("Enter Password");
        this.loginButton   = page.getByText("Sign in",{exact:true});
        this.newUserSignup = page.getByText("New user? Signup",{exact: true});
        this.errormsg      = page.locator('.errorMessage');
    }
    async loginToApplication(username,password){
        await this.enterText(this.usernameField,username);
        await this.enterText(this.passwordField,password);
        await this.clickElement(this.loginButton);

        // await this.usernameField.fill(username);
        // await this.passwordField.fill(password);
        // await this.loginButton.click();
    }

    async newUserSignup(){
        await this.clickElement(this.newUserSignup);
       // await this.newUserSignup.click();
    }

    async getErrorMessage(){

       return await this.getElementText(this.errormsg);
       // return await this.errormsg.textContent();
    }
}