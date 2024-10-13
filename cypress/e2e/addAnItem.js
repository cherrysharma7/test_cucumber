import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from './loginPage'

Given('I am logged into Sauce Demo site', () => {
  LoginPage.visit()
  LoginPage.fillusername()
  LoginPage.fillpassword()
  LoginPage.Submit()
  });

  When('I click on the item', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  Then('item should be in the shopping cart', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="inventory-item-name"]').should('exist');
  });

