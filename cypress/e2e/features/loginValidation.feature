Feature: Autenticacao de Usuário

  Scenario: Login com credenciais válidas
    Given o usuário acessa a página de login
    When o usuário insere credenciais válidas
    Then o sistema concede acesso à conta

  Scenario: Login com credenciais inválidas
    Given o usuário acessa a página de login
    When o usuário insere credenciais inválidas
    Then o sistema exibe uma mensagem de erro

  Scenario: Logout do sistema
    Given o usuário está logado
    When o usuário clica em Logout
    Then o sistema encerra a sessão e redireciona para a página inicial
