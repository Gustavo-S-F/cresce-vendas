Feature: Autenticação de Usuário

  Scenario: Alteração de informações do perfil
    Given o usuário está logado
    When o usuário acessa a página de perfil e edita as informações
    Then o sistema salva as alterações com sucesso
