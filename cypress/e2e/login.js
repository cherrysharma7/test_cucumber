import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from './loginPage'

Given('I am on the Sauce Demo login page', () => {
  LoginPage.visit()
  cy.url().should('include', 'saucedemo');// assertion for url
  cy.title().should('eq', 'Swag Labs'); // assertion for the title 
});

When('I enter valid username and password', () => {
  LoginPage.fillusername()
  LoginPage.fillpassword()
});

When('I click the login button', () => {
  LoginPage.Submit()
});

Then('I should be logged in successfully', () => {
  cy.url().should('include', '/inventory.html');
});