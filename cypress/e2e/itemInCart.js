import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged into Sauce Demo site', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  When('I click on the cart icon', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('exist');
  });
  
  Then('item should be in the shopping cart', () => {
    cy.get('[data-test="inventory-item-name"]').should('exist');
  });
