## 🧠 Suporte avançado

### ✅ Testes em paralelo
Já configurado com `--parallel 4`. Pode ajustar o número conforme sua máquina ou CI.

### 🌀 Execução headless/headful
```bash
HEADLESS=false npm test       # roda com navegador visível
HEADLESS=true npm test        # padrão (headless)
```
Ou use o script:
```bash
npm run test:headful
```

### 🧬 Integração com GitHub Actions
CI configurado em `.github/workflows/ci.yml`, com:
- Instalação de dependências
- Execução de testes
- Geração de relatório
- Upload do HTML como artefato

### 📤 Relatório automático no CI
Após cada push ou PR para `main`, o relatório em HTML será gerado e anexado como artefato no GitHub Actions.

---