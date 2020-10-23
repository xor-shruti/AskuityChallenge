Feature: User Registration
    @tc1 @all
    Scenario: To verify new user registration
        Given I am on the Automation Practice Website's Home page 
        When I click on the 'Sign In' Button
        And I enter valid email id
        And I click on the 'Create Account' Button
        And I register with valid values on the User Registration Page
        |Details       |    Values      |
        |First Name    |    Jane        |
        |Last Name     |    Smith       |
        |Password      |    jane123     |
        |Address       |    Denver      |
        |City          |    Denver      |
        |State         |    Oklahoma    |
        |Zip           |    90210       |
        |Mobile Phone  |  604 555 5555  |
        |Address Alias |    DESC        |
        Then The user is created

    
