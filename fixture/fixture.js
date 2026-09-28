import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

export const test =base.extend({
    loginPage:async({page},use)=>{
        console.log("Inside login fixture");
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage:async({page},use)=>{
        console.log("Inside dashboardPage fixture");
        const  dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }


});
export { expect } from '@playwright/test';