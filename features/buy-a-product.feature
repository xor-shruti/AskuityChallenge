Feature: Buy a Product
    @tc2 @all
    Scenario Outline: To verify if a User is able Purchase a Product
        Given I am on the Automation Practice Website's Home page 
        When I click on the 'Sign In' Button
        And I enter valid "<username>" and "<password>"
        And I click on 'Women' and select 'Summer Dresses'
        And I move to 'Printed Summer Dress' and select Quick view
        And I select 's' size and add to cart
        And I click on Proceed to checkout
        And I click on Proceed to checkout on Summary Tab
        And I click on Proceed to checkout on Address Tab
        And I agree to the terms and conditions
        And I click on Proceed to checkout on Shipping Tab
        Then The item to be purchased appears on the Payment tab
Examples:
        |username         |password      |
        |ralph@outlook.com|ralph123      |