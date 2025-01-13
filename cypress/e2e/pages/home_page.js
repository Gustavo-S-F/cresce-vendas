/// <reference types="Cypress" />


import HomeElements from "../elements/home_elements"
const homeElements = new HomeElements

class HomePage{
  accessLoginPage(){
      cy.get(homeElements.myccountBtn).click()
      cy.get(homeElements.logginBtn).click()
  }

}
export default HomePage