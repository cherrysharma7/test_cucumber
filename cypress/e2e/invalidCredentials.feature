Feature: Invalid credentials functionality

  Scenario: Unsuccessful login with Invalid credentials
    Given I am on the Sauce Demo login page
    When I enter Invalid username and password
    And I click the login button
    Then I should be getting error message