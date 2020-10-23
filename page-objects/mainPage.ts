import { camelCase } from 'lodash';

import { NightwatchBrowser } from 'nightwatch';

const commands = {
    async clickOnButton(browser: NightwatchBrowser,button: string){
        let buttonLocator:string = camelCase(button);
        await browser.page.mainPage()
        .waitForElementVisible(mainPage.elements[buttonLocator], 2000)
        .click(mainPage.elements[buttonLocator]);
    },
    async enterValidEmailId(browser: NightwatchBrowser){
        const timestamp: string = String(Date.now());
        let emailId: string = `janesmith${timestamp}@outlook.com`;
        await browser.page.mainPage()
        .waitForElementVisible(mainPage.elements.emailAddress, 2000)
        .click(mainPage.elements.emailAddress)
        .setValue(mainPage.elements.emailAddress, emailId);
    },
    async login(browser: NightwatchBrowser, uname:string, pswd: string){
        await browser.page.mainPage()
        .waitForElementVisible(mainPage.elements.registeredUserEmailAddress, 2000)
        .click(mainPage.elements.registeredUserEmailAddress)
        .setValue(mainPage.elements.registeredUserEmailAddress, uname);
        await browser.page.mainPage()
        .waitForElementVisible(mainPage.elements.registeredUserloginPassword, 2000)
        .click(mainPage.elements.registeredUserloginPassword)
        .setValue(mainPage.elements.registeredUserloginPassword, pswd);
        await browser.page.mainPage()
        .waitForElementVisible(mainPage.elements.signInButton, 2000)
        .click(mainPage.elements.signInButton);
    }

    
};

export interface mainPageObject {
    elements: {
        signIn: string;
        emailAddress: string;
        createAccount: string;
        registeredUserEmailAddress: string;
        registeredUserloginPassword: string;
        signInButton: string;
        womenlink: string;
    },
    commands: any;
}

const mainPage: mainPageObject = {
    elements: {
        signIn: '.login',    
        emailAddress: '#email_create',
        createAccount: '#SubmitCreate',
        registeredUserEmailAddress: '#email',
        registeredUserloginPassword: '#passwd',
        signInButton: '#SubmitLogin',
        womenlink: "//a[text()='Women']",


    },
    commands: [commands]
};

module.exports = mainPage;