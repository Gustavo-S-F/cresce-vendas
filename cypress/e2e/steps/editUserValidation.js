/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
import HomePage from "../pages/home_page";
import EditUserPage from "../pages/editUser_page";
const loginPage =  new LoginPage
const homePage = new HomePage
const editUserPage = new EditUserPage

Given(/^o usuário está logado$/, () => {
	loginPage.acessSystems()
	loginPage.accessLoginPage()
    loginPage.fillFieldsValidUser()
});

When(/^o usuário acessa a página de perfil e edita as informações$/, () => {
	editUserPage.accessEditUserPage()
	editUserPage.editUserInformation()
});

Then(/^o sistema salva as alterações com sucesso$/, () => {
	editUserPage.validateEdition()
});
