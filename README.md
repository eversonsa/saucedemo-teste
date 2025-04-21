# 🔥 Testes E2E com Playwright, Cucumber e TypeScript

Este projeto implementa automações de testes End-to-End (E2E) utilizando:

- 🎭 [Playwright](https://playwright.dev/)
- 🥒 [Cucumber](https://cucumber.io/)
- 💡 TypeScript
- 📦 Page Object Model
- 📘 Modelos de dados (ex: `UserModel`, `ProductModel`)
- 🧪 BDD com Gherkin

> Testes executados no site [https://www.saucedemo.com](https://www.saucedemo.com)

---

## 📁 Estrutura do Projeto
📦 src ├── features/ # Features em Gherkin │ ├── login.feature │ ├── cart.feature │ └── checkout.feature ├── step-definitions/ # Steps Cucumber (Glue code) ├── pages/ # Page Object Models │ ├── LoginPage.ts │ ├── ProductPage.ts │ ├── CartPage.ts │ └── CheckoutPage.ts ├── models/ # Modelos de dados (user, produto etc.) ├── support/ │ └── world.ts # Custom World para contexto de testes ├── utils/ # Utils e helpers (opcional) └── index.ts # Arquivo inicial (opcional)


---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install

2. Execute os testes
npx cucumber-js

🧪 Scripts úteis
# Rodar testes em modo debug
npx cucumber-js --debug

# Rodar testes com tag específica
npx cucumber-js --tags "@checkout"

✅ Funcionalidades cobertas
Login com sucesso e com erro

Adicionar produtos ao carrinho

Verificar produto no carrinho

Finalizar checkout com sucesso

🧠 Conceitos aplicados
BDD com Cucumber e Gherkin

Page Object Model, Factories

Separação de responsabilidades (models, steps, pages, services, utils, factories)

Testes reutilizáveis e organizados

Suporte a múltiplos usuários e produtos via modelagem

🤝 Contribuições
Sinta-se à vontade para abrir issues ou PRs! Bora fortalecer a comunidade de QA 🚀

📄 Licença
Este projeto é open-source e distribuído sob a licença MIT

👑 Autor
Everson "Sde Araujo"
QA Engineer | Test Automation Specialist | Criador de conteúdo técnico
📬 LinkedIn — https://www.linkedin.com/in/everson-s-araujo-a8b3311a4/