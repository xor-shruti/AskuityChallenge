import { When, Then } from 'cucumber';
import { client } from 'nightwatch-api';

When(/^I click on '([^']*)' and select '([^']*)'$/, async (firstElement: string, secondElement: string) => {
  await client.page.myAccountPage().clickOnLink(client, firstElement, secondElement);
});

When(/^I move to '([^']*)' and select '([^']*)'$/, async (firstElement: string, secondElement: string) => {
  await client.page.myAccountPage().selectDress(client, firstElement, secondElement);
});

When(/^I select '([^']*)' size and add to cart$/, async (value: string) => {
  await client.page.myAccountPage().selectSizeAndAddToCart(client, value);
});

When(/^I click on Proceed to checkout$/, async () => {
  await client.page.myAccountPage().checkout(client);
});

Then(/^The user is created$/, async () => {
    await client.page.myAccountPage().verifyUserCreated(client);
});