import {page} from"@playwright/test"
import { BasePage } from "./BasePage";
export class DashboardPage extends BasePage{
    constructor(page){
        super(page);
        this.page=page;
        this.menuIcon= page.getByAltText('menu');
        this.signoutIcon=page.getByRole('button',{name:'Sign out'})
    }
    async clickOnMenuIcon(){
        await this.clickElement(this.menuIcon);
       // await this.menuIcon.click();
    }

    async clickOnSignOutIcon(){
        await this.clickElement(this.signoutIcon);
        //await this.signoutIcon.click();
    }
}