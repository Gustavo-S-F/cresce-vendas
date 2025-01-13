/// <reference types="Cypress" />

import CheckoutElements from "../elements/checkout_elements";
const checkoutElements =  new CheckoutElements
class CheckoutPage{

    fillInTheCheckoutFields(){
        cy.get(checkoutElements.guestCheckoutField).click()
        cy.get(checkoutElements.firstNameCheckoutField).type('Cresce')
        cy.get(checkoutElements.lastNameCheckoutField).type('Vendas')
        cy.get(checkoutElements.emailCheckoutField).type('qagustaqa@gmail.com')
        cy.get(checkoutElements.firstAdressCheckoutField).type('Av. Rondon Pacheco')
        cy.wait(2000)
        cy.get(checkoutElements.cityCheckoutField).type('Uberlândia')
        cy.get(checkoutElements.postCodeCheckoutField).type('38400050')
        cy.get(checkoutElements.countryCheckoutField).select('Brazil')
        cy.wait(2000)
        cy.get(checkoutElements.regionalStateCheckoutField).select('Minas Gerais')
        cy.get(checkoutElements.continueCheckoutBtn).click()
        cy.get(checkoutElements.shippingMetodCheckoutBtn).click()
        cy.get(checkoutElements.flatShippingRateSelect).click()
        cy.wait(2000)
        cy.get(checkoutElements.continueShippingBtn).click({ force: true });
        cy.get(checkoutElements.paymentMethodBtn).click()
        cy.get(checkoutElements.cashOnDeliveriBtn).click()
        cy.wait(2000)
        cy.get(checkoutElements.continuePaymentMethodBtn).click({ force: true });
        cy.get(checkoutElements.confirmOrderBtn).click()
        }

        validatesCheckoutSuccess(){
        cy.wait(2000)
        cy.url().should('include', '/success');
        cy.get(checkoutElements.confirmOrderTitle).should('be.visible').contains('Your order has been placed!')
        }

}

export default CheckoutPage