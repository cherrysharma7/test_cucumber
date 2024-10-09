import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Sauce Demo login page', () => {
    cy.visit('https://www.saucedemo.com');
    cy.url().should('include', 'saucedemo');// assertion for url
    cy.title().should('eq', 'Swag Labs'); // assertion for the title 
  });

  When('I enter Invalid username and password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret');
  });

  When('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
  });

   Then('I should be getting error message', () => {
    cy.get('[data-test="error-button"]').should('exist');
   });