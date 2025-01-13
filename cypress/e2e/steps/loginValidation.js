/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
import HomePage from "../pages/home_page";
const loginPage =  new LoginPage
const homePage = new HomePage

Given(/^o usuário acessa a página de login$/, () => {
	loginPage.acessSystems()
	loginPage.accessLoginPage()
});

When(/^o usuário insere credenciais válidas$/, () => {
	loginPage.fillFieldsValidUser()
});

Then(/^o sistema concede acesso à conta$/, () => {
	loginPage.validateLoggedIn()
	homePage.simulatesHumanBehavior()
});



Given(/^o usuário acessa a página de login$/, () => {
	loginPage.acessSystems()
	loginPage.accessLoginPage()
});

When(/^o usuário insere credenciais inválidas$/, () => {
	loginPage.fillFieldsInvalidUser()
});

Then(/^o sistema exibe uma mensagem de erro$/, () => {
	loginPage.validateErrorLogin()
	homePage.simulatesHumanBehavior()
});



Given(/^o usuário está logado$/, () => {
	loginPage.acessSystems()
	loginPage.accessLoginPage()
	loginPage.fillFieldsValidUser()
});

When(/^o usuário clica em Logout$/, () => {
	loginPage.logout()
});

Then(/^o sistema encerra a sessão e redireciona para a página inicial$/, () => {
	loginPage.validateLogout()
	homePage.simulatesHumanBehavior()
});
