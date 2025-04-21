Feature: Finalizar compra

  Scenario: Finalizar compra com sucesso
    Given que o usuário está logado com o usuário "standard_user" e senha "secret_sauce"
    And ele adiciona o produto "Sauce Labs Backpack" ao carrinho
    And acessa o carrinho
    When ele preenche os dados do checkout com nome "Everson", sobrenome "Zendure" e cep "12345"
    And finaliza a compra
    Then deve ver a mensagem de sucesso "Thank you for your order!"
