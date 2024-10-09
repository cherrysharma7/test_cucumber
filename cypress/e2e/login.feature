Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I am on the Sauce Demo login page
    When I enter valid username and password
    And I click the login button
    Then I should be logged in successfully