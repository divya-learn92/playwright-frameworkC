//import {expect} from "@playwright/test"
import {test,expect} from "../../fixture/fixture"

import user from "../../testdata/user.json";

test.describe("Login Test",{tags:['@smoke','@login']},()=>{
test("Login to application", async({page,loginPage,dashboardPage})=>{
  
    await page.goto('/login');
    //const loginPage= new LoginPage(page);
    //await loginPage.loginToApplication('admin@email.com','admin@123')
    console.log(`test data used is ${user.username} and ${user.password}`);
    await loginPage.loginToApplication(user.username,user.password);
   // const  dashboardPage = new DashboardPage(page);
    await dashboardPage.clickOnMenuIcon();
    await dashboardPage.clickOnSignOutIcon();
    expect(page.url()).not.toContain('/login');
})
})

// test("Login to application", async({page})=>{
  
//     await page.goto('/login');
//     const loginPage= new LoginPage(page);
//     //await loginPage.loginToApplication('admin@email.com','admin@123')
//     console.log(`test data used is ${user.username} and ${user.password}`);
//     await loginPage.loginToApplication(user.username,user.password);
//     const  dashboardPage = new DashboardPage(page);
//     await dashboardPage.clickOnMenuIcon();
//     await dashboardPage.clickOnSignOutIcon();
//     expect(page.url()).not.toContain('/login');
// })