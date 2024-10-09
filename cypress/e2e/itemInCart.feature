Feature: Item In Cart functionality

  Scenario: An item is in the the shopping cart
    Given I am logged into Sauce Demo site
    When I click on the cart icon
    Then item should be in the shopping cart