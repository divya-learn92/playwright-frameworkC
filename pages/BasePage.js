import{test} from"@playwright/test"

export class BasePage{
   
    constructor(page){
        
        this.page=page;

    }
    async enterText(selector,text){
        await selector.fill(text);
        console.log(`************** Entered text is ${text}******************`);
    }
    async clickElement(selector){
        await selector.click();
    }
    async navigateToApplication(url){
        await this.page.goto(url);
    }
    async uploadFile(selector,filePath){
        await selector.setInputFiles(filePath);
    }
    async getElementText(selector){
        let msg = await selector.textContent();
        console.log(`************** Received error is: ${msg}******************`);
        return  msg;
    }
}