import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from './loginPage';

Given('I am on the Sauce Demo login page', () => {
    LoginPage.visit();
    cy.url().should('include', 'saucedemo');// assertion for url
    cy.title().should('eq', 'Swag Labs'); // assertion for the title 
  });

  When('I enter Invalid username and password', () => {
    LoginPage.fillusername('standard_user')
    LoginPage.fillinvalidpassword('sauce')
  });

  When('I click the login button', () => {
    LoginPage.Submit()
  });

   Then('I should be getting error message', () => {
    cy.get('[data-test="error-button"]').should('exist');
   });