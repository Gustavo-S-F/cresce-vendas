/// <reference types="Cypress" />


import HomeElements from "../elements/home_elements"
import ProductElements from "../elements/product_elements"
const homeElements = new HomeElements
const productElements = new ProductElements

class HomePage{
 
   navigateProducts(){
    cy.get(homeElements.containerProducts).should('be.visible')
    cy.get(homeElements.containerProducts).contains('iPhone').click()
    cy.get(productElements.productIphTitle).should('be.visible')
    cy.url().should('include', '/product/iphone');
    cy.get(homeElements.openCartLogo).click()
   }

   validateProducts(){
    cy.get(homeElements.containerProducts).contains('iPhone')
    cy.get(homeElements.containerProducts).contains('MacBook')
    cy.get(homeElements.containerProducts).contains('Apple Cinema 30"')
    cy.get(homeElements.containerProducts).contains('Canon EOS 5D')
   }

   searchAProduct(){
    cy.get(homeElements.searchField).type('iPhone')
    cy.get(homeElements.confirmSearchBtn).click()
   }

   validatesProductResearch(){
    cy.get(homeElements.containerProducts).contains('iPhone')
    cy.get(homeElements.containerProducts).should('not.contain','MacBook')
    cy.get(homeElements.containerProducts).should('not.contain','Apple Cinema 30"')
    cy.get(homeElements.containerProducts).should('not.contain','Canon EOS 5D')
   }

   addProductToCart(){
      cy.get(homeElements.addToCartProductIph).click()
   }

   validatesProductInCart(){
      cy.get(homeElements.addToCartProductSuccessAlert).contains('Success: You have added iPhone to your shopping cart!')
      cy.wait(1500)
      cy.get(homeElements.cart).contains('1 item')
      cy.get(homeElements.cart).click({force: true})
      cy.get(homeElements.productNameInCart).contains('iPhone')
   }

   removeProductToCart(){
      cy.get(homeElements.removeProductToCart).click({force: true})
   }

   validatesRemovalOfProductFromCart(){
      cy.get(homeElements.cart).contains('0 item')
      cy.get(homeElements.cart).click({force: true})
      cy.get(homeElements.cartContents).contains('Your shopping cart is empty!')
   }
}
export default HomePage