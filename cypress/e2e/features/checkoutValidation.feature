Feature: Validação de compra
  
    Scenario: Finalizar compra
    Given o usuário entre no sistema 
    And adiciona um produto no carrinho
    When o usuário segue para o checkout
    Then o sistema simula a finalização da compra com sucesso