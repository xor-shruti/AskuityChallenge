import { NightwatchBrowser } from 'nightwatch';


const commands = {
    async verifyUserCreated(browser: NightwatchBrowser){
        await browser.pause(3000);
        await browser.getText('css selector',myAccountPage.elements.userName, (result) => {
                this.assert.equal(result.value, 'Jane Smith');
              }); 
        await browser.page.myAccountPage().click(myAccountPage.elements.signOutButton); 
    },
    async clickOnLink(browser: NightwatchBrowser, firstElement: string, secondElement: string) {
        let xpathOfFirstElement: string = `//a[text()='${firstElement}']`;
        let xpathOfSecondElement: string = `//a[text()='${secondElement}']`;
        await browser.useXpath().moveToElement(xpathOfFirstElement,10,10, ()=>{
            browser
            .waitForElementVisible(xpathOfSecondElement, 2000)
            .click(xpathOfSecondElement).useCss();
        });
    },
    async selectDress(browser: NightwatchBrowser, dress: string){
        let selectedDress: string = `//img[@alt = '${dress}']`;
        await browser.elements('xpath', selectedDress, (elements) => {
        let element = null;
        element = elements.value[0].ELEMENT;
        browser.moveTo(element).mouseButtonClick('left');
        });

    },
    async selectSizeAndAddToCart(browser: NightwatchBrowser, option: string){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .moveToElement(myAccountPage.elements.sizeDropDown,10,10)
        .click(myAccountPage.elements.sizeDropDown)
        .setValue(myAccountPage.elements.sizeDropDown, option)
        .moveToElement(myAccountPage.elements.addToCartButton,10,10)
        .waitForElementPresent(myAccountPage.elements.addToCartButton, 2000)
        .click(myAccountPage.elements.addToCartButton)
        .frame(null);    
    },
    async checkout(browser: NightwatchBrowser){
        await browser.page.myAccountPage()
        .useCss()
        .waitForElementVisible(myAccountPage.elements.proceedToCheckOut, 3000)
        .moveToElement(myAccountPage.elements.proceedToCheckOut,10,10)
        .click(myAccountPage.elements.proceedToCheckOut);
    }
};

export interface myAccountPageObject {
    elements: {
        userName: string;
        signOutButton: string;
        summerDressesLink: string;
        successfullAccountCreation: string;
        sizeDropDown: string;
        addToCartButton: string;
        printedDress: string;
        proceedToCheckOut: string;
    },
    commands: any;
}

const myAccountPage: myAccountPageObject = {
    elements: {
        userName:  '.account span',    
        signOutButton: '.logout',
        summerDressesLink: "//a[text()='Summer Dresses']",
        successfullAccountCreation: "/p[@class = 'info-account']",
        sizeDropDown: "select[class*='form-control attribute_select no-print']",
        addToCartButton: "#add_to_cart button span",
        printedDress: "//img[@alt = 'Printed Summer Dress']",
        proceedToCheckOut: "a[title='Proceed to checkout']>span",
    },
    commands: [commands]
};

module.exports = myAccountPage;