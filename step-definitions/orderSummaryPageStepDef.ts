import { When, Then } from 'cucumber';
import { client } from 'nightwatch-api';
import _ from "lodash";

When(/^I click on Proceed to checkout on Summary Tab$/, async () => {
  await client.page.orderSummaryPage().proceedToCheckoutSummaryTab(client);
});

When(/^I click on Proceed to checkout on Address Tab$/, async () => {
  await client.page.orderSummaryPage().proceedToCheckoutAddressTab(client);
});

When(/^I click on Proceed to checkout on Shipping Tab$/, async () => {
  await client.page.orderSummaryPage().proceedToCheckoutShippingTab(client);
});

When(/^I agree to the terms and conditions$/, async () => {
  await client.page.orderSummaryPage().acceptTermsAndConditions(client);
});

Then(/^The item to be purchased appears on the Payment tab$/, async () => {
  await client.page.orderSummaryPage().validateOrder(client);
});