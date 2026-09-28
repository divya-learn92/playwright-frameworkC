//import {test,expect} from"@playwright/test"
import {test,expect} from "../../fixture/fixture.js"
import { LoginPage } from "../../pages/LoginPage"
import multiUser from "../../testdata/multiuser.json"

test.describe("Data driven login test",{tags:['@data-drive','@login']},()=>{
for (const user of multiUser){
test(`login to application  ${user.id}`, async({page,loginPage})=>{
    await page.goto('/login');
    //const loginPage= new LoginPage(page);
    console.log(`dataset used is ${user.username} and ${user.password}`);
    await loginPage.loginToApplication(user.username,user.password);
    expect(await loginPage.getErrorMessage()).toBe(user.message);
});
}
    
})
// for (const user of multiUser){
// test(`login to application  ${user.id}`, async({page})=>{
//     await page.goto('/login');
//     const loginPage= new LoginPage(page);
//     console.log(`dataset used is ${user.username} and ${user.password}`);
//     await loginPage.loginToApplication(user.username,user.password);
//     expect(await loginPage.getErrorMessage()).toBe(user.message);
// });
// }

