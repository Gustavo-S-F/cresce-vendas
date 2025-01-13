/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
import HomePage from "../pages/home_page";
const loginPage =  new LoginPage
const homePage = new HomePage




Given(/^o usuário acessa o site$/, () => {
	loginPage.acessSystems()
	homePage.simulatesHumanBehavior() 
});

When(/^o usuário navega pelo catálogo de produtos$/, () => {
	homePage.navigateProducts()
});

Then(/^o sistema exibe os produtos disponíveis$/, () => {
	homePage.validateProducts()
});




Given(/^o usuário acessa o site$/, () => {
	loginPage.acessSystems()
	homePage.simulatesHumanBehavior() 
});

When(/^o usuário digita um termo de busca$/, () => {
	homePage.searchAProduct()
});

Then(/^o sistema exibe os produtos relacionados$/, () => {
	homePage.validatesProductResearch()
	homePage.simulatesHumanBehavior() 
});





Given(/^o usuário visualiza um produto$/, () => {
	loginPage.acessSystems()
	homePage.simulatesHumanBehavior() 
});

When(/^o usuário clica em Adicionar ao carrinho$/, () => {
	homePage.addProductToCart()
});

Then(/^o sistema adiciona o produto ao carrinho$/, () => {
	homePage.validatesProductInCart()
});




Given(/^o usuário tem produtos no carrinho$/, () => {
	loginPage.acessSystems()
	homePage.addProductToCart()
	homePage.simulatesHumanBehavior() 
});

When(/^o usuário remove um produto$/, () => {
	homePage.simulatesHumanBehavior() 
	homePage.removeProductToCart()
});

Then(/^o sistema atualiza o carrinho sem o produto$/, () => {
	homePage.simulatesHumanBehavior() 
	homePage.validatesRemovalOfProductFromCart()
	
});


