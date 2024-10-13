const URL = 'https://www.saucedemo.com'
const USERNAME_INPUT = '[data-test="username"]'
const PASSWORD_INPUT  = '[data-test="password"]'
const SUBMIT_BUTTON = '[data-test="login-button"]'
const INVALID_PASSWORD = '[data-test="password"]'

class LoginPage{
    static visit(){
        cy.visit(URL)
    }

static fillusername(){
    cy.get(USERNAME_INPUT).type('standard_user')
}
static fillpassword(){
    cy.get(PASSWORD_INPUT).type('secret_sauce')
}
static fillinvalidpassword(){
    cy.get(INVALID_PASSWORD).type('sauce')
}
static Submit(){
    cy.get(SUBMIT_BUTTON).click()
}
}
export default LoginPage