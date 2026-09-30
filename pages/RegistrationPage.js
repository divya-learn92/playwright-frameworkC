import {page} from "@playwright/test"

class RegistrationPage{

    constructor(page){
        this.page = page;
        this.nameField= page.getByPlaceholder('Name');
        this.emailField =  page.getByPlaceholder('Email');
        this.passwordField = page.getByTitle('Password must be atleast 6 characters');
        this.interestsCheckbox= page.getByText('Selenium');
       this.interestsCheckbox1= page.getByRole('checkbox', { name: 'JAVA',exact:true});
       this.genderRadio= page.locator('#gender2');
       this.stateDropdown= page.locator('#state');
       this.hobbiesMultiDropdown= page.locator('#hobbies');
       this.signUpButton = page.getByRole('button',{name:'Sign Up'});
    }
 async registerNewUser(name,password,email){
    await this.enterText(this.nameField,name);
    await this.enterText(this.emailField,email);
     await this.enterText(this.passwordField,password);
 }
}
