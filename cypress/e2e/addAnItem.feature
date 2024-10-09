Feature: Add An Item functionality

  Scenario: An item get added to the shopping cart
    Given I am logged into Sauce Demo site
    When I click on the item
    Then item should be in the shopping cart