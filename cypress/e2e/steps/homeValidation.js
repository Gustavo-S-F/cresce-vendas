/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
import HomePage from "../pages/home_page";
const loginPage =  new LoginPage
const homePage = new HomePage



Given(/^o usuário acessa o site$/, () => {
	loginPage.acessSystems()
    homePage.accessLoginPage()
    //loginPage.accessLoginPage()
});

When(/^o usuário navega pelo catálogo de produtos$/, () => {
	return true;
});

Then(/^o sistema exibe os produtos disponíveis$/, () => {
	return true;
});
