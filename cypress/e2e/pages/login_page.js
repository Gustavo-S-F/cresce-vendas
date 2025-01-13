/// <reference types="Cypress" />

import LoginElements from "../elements/login_elements"
import MyAccountElements from "../elements/myAccount_elements"
const myAccountElements = new MyAccountElements
const loginElements = new LoginElements
const url = Cypress.config ('baseUrl')

class LoginPage{

   acessSystems(){
      cy.visit(url)
   }   

   fillFieldsValidUser(){
      cy.get(loginElements.emailField).type('qagustaqa@gmail.com')
      cy.get(loginElements.passwordField).type('teste123')
      cy.get(loginElements.confirmLoginBtn).click()
      cy.url().should('include', '/login');
   }

   validateLoggedIn(){
      cy.get(myAccountElements.myAccountTitle).should('be.visible')
      cy.get(myAccountElements.logoutBtn).should('be.visible')
      cy.url().should('include', '/account');
   }

   fillFieldsInvalidUser(){
      cy.get(loginElements.emailField).type('teste')
      cy.get(loginElements.passwordField).type('teste123')
      cy.get(loginElements.confirmLoginBtn).click()   
   }

   validateErrorLogin(){
      cy.get(loginElements.alertLoginFail).should('contain','Warning: No match for E-Mail Address and/or Password')
   }
   
   logout(){
      cy.get(loginElements.logoutBtn).click()
   }

   validateLogout(){
      cy.url().should('include', '/logout');
      cy.get(myAccountElements.continueLogoutBtn).click()
      cy.url().should('include', '/home');
   }
}
export default LoginPage