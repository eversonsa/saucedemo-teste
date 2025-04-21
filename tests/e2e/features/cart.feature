Feature: Adicionar produtos ao carrinho

  Scenario: Adicionar um produto com sucesso ao carrinho
    Given que o usuário está logado com o usuário "standard_user" e senha "secret_sauce"
    When ele adiciona o produto "Sauce Labs Backpack" ao carrinho
    And acessa o carrinho
    Then ele deve ver o produto "Sauce Labs Backpack" no carrinho
