Feature: Login

  Scenario: Login com sucesso
    Given que o usuário está logado com o usuário "standard_user" e senha "secret_sauce"
    Then ele deve ver a página de dashboard

  Scenario: Login com usuário bloqueado
    Given que o usuário está logado com o usuário "locked_out_user" e senha "secret_sauce"
    Then deve ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."
