/// <reference types="Cypress" />

import MyAccountElements from "../elements/myAccount_elements"
const myAccountElements = new MyAccountElements
class EditUserPage{
 
    accessEditUserPage(){
        cy.get(myAccountElements.optionListMyAccount).contains('Edit Account').click()
        cy.get(myAccountElements.myAccountTitle).contains('My Account Information')
    }

    editUserInformation(){
        cy.get(myAccountElements.firstNameFieldEdition).clear().type('CRESCE VENDAS')
        cy.get(myAccountElements.confirmEditionBtn).click()
    }

    validateEdition(){
        cy.get(myAccountElements.successEditionAlert).contains('Success: Your account has been successfully updated.')
        cy.get(myAccountElements.optionListMyAccount).contains('Edit Account').click()
        cy.get(myAccountElements.myAccountTitle).contains('My Account Information')
        cy.get(myAccountElements.firstNameFieldEdition).should('have.value','CRESCE VENDAS')
        cy.get(myAccountElements.firstNameFieldEdition).clear().type('TESTE')
        cy.get(myAccountElements.confirmEditionBtn).click()
        cy.get(myAccountElements.successEditionAlert).contains('Success: Your account has been successfully updated.')
    }

}
export default EditUserPage