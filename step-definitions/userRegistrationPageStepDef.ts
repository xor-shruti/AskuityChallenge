import { When, TableDefinition } from 'cucumber';
import { client } from 'nightwatch-api';
var _ = require('lodash');

When(/^I register with valid values on the User Registration Page$/, 
async (table: TableDefinition) => {
    var values = table.hashes();
  await  _.each(values, (values: any)=>  client.page.userRegistrationPage().fillUserRegistrationForm(client, values.Details, values.Values));
    });