import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  LoginPage from './loginPage'

Given('I am logged into Sauce Demo site', () => {
    LoginPage.visit()
    LoginPage.fillusername('standard_user')
    LoginPage.fillpassword('secret_sauce')
    LoginPage.Submit()
  });

  When('I click on the cart icon', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('exist');
  });
  
  Then('item should be in the shopping cart', () => {
    cy.get('[data-test="inventory-item-name"]').should('exist');
  });
