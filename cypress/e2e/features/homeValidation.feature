
Feature: Catálogo de Produtos

  Scenario: Navegação pelo catálogo de produtos
    Given o usuário acessa o site
    When o usuário navega pelo catálogo de produtos
    Then o sistema exibe os produtos disponíveis

  Scenario: Busca de produtos
    Given o usuário acessa o site
    When o usuário digita um termo de busca
    Then o sistema exibe os produtos relacionados

  Scenario: Adicionar produto ao carrinho
    Given o usuário visualiza um produto
    When o usuário clica em "Adicionar ao carrinho"
    Then o sistema adiciona o produto ao carrinho

  Scenario: Remover produto do carrinho
    Given o usuário tem produtos no carrinho
    When o usuário remove um produto
    Then o sistema atualiza o carrinho sem o produto






