import { camelCase } from 'lodash';

import { NightwatchBrowser } from 'nightwatch';

const commands = {
     
    // Method to fill user registration form
    async fillUserRegistrationForm(browser: NightwatchBrowser, field: string, value: string){
        let fieldLocator: string = camelCase(field);
        if(fieldLocator === 'state'){
        await browser
        .click(userRegistrationPage.elements.state)
        .setValue(userRegistrationPage.elements.state, value);
        } else {
        await browser.page.userRegistrationPage()
        .waitForElementPresent(userRegistrationPage.elements[fieldLocator], 5000)
        .clearValue(userRegistrationPage.elements[fieldLocator])
        .setValue(userRegistrationPage.elements[fieldLocator], value);
        }
        await browser.page.mainPage()
        .click(userRegistrationPage.elements.registerButton);
    },
    
    
};

export interface userRegistrationPageObject {
    elements: {
        firstName: string;
        lastName: string;
        password: string;
        address: string;    
        city: string;
        state: string;
        zip: string;
        mobilePhone: string;
        addressAlias: string;
        registerButton: string;
    },
    commands: any;
}

const userRegistrationPage: userRegistrationPageObject = {
    elements: {
        firstName: '#customer_firstname',
        lastName: '#customer_lastname',
        password: '#passwd',
        address: '#address1',    
        city: '#city',
        state: 'select[id=id_state]',
        zip: '#postcode',
        mobilePhone: '#phone',
        addressAlias: '#alias',
        registerButton :'button[name=submitAccount]'

    },
    commands: [commands]
};

module.exports = userRegistrationPage;