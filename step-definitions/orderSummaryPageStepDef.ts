import { When, Then } from 'cucumber';
import { client } from 'nightwatch-api';

When(/^I click on Proceed to checkout on (Summary|Address|Shipping) Tab$/, async (tab: string) => {
  if(tab === 'Summary'){
  await client.page.orderSummaryPage().proceedToCheckoutSummaryTab(client);
  } else if (tab === 'Address'){
  await client.page.orderSummaryPage().proceedToCheckoutAddressTab(client);
  }else if(tab === 'Shipping'){
  await client.page.orderSummaryPage().proceedToCheckoutShippingTab(client);
  }else {
  throw Error('incorrect tab value');
  }
});

When(/^I agree to the terms and conditions$/, async () => {
  await client.page.orderSummaryPage().acceptTermsAndConditions(client);
});

Then(/^The item to be purchased appears on the Payment tab$/, async () => {
  await client.page.orderSummaryPage().validateOrder(client);
});