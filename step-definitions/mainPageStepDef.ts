import { Given, When } from 'cucumber';
import { client } from 'nightwatch-api';

Given(/^I am on the Automation Practice Website\'s Home page$/, async () => {
  await client.url('http://automationpractice.com');
  client.maximizeWindow();
});

When(/^I click on the '([^']*)' Button$/, async (button: string) => {
  await client.page.mainPage().clickOnButton(client,button);
});

When(/^I enter valid email id$/, async () => {
  await client.page.mainPage().enterValidEmailId(client);
});

When(/^I enter valid \"(.*?)\" and \"(.*?)\"$/, async (uname:string, pswd: string) => {
  await client.page.mainPage().login(client, uname, pswd);
});
