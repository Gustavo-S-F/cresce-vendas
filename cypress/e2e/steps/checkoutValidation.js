/// <reference types="Cypress" />

import HomePage from "../pages/home_page";
import LoginPage from "../pages/login_page";
import CheckoutPage from "../pages/checkout_Page";

const homePage = new HomePage
const loginPage = new LoginPage
const checkoutPage =  new CheckoutPage


Given(/^o usuário entre no sistema$/, () => {
    loginPage.acessSystems()
});

Then(/^adiciona um produto no carrinho$/, () => {
	homePage.enterInMp3Module()
    homePage.simulatesHumanBehavior()   
});

When(/^o usuário segue para o checkout$/, () => {
	homePage.validateIpodInCart()
    homePage.simulatesHumanBehavior() 
    checkoutPage.fillInTheCheckoutFields()
    homePage.simulatesHumanBehavior() 
});

Then(/^o sistema simula a finalização da compra com sucesso$/, () => {
	checkoutPage.validatesCheckoutSuccess()
});
