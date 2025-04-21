const fs = require('fs');
const path = require('path');

// Caminho do diretório de relatórios
const reportDir = path.join(__dirname, '../reports');

// Verificar se o diretório 'reports' existe
if (!fs.existsSync(reportDir)) {
  // Se não existir, criar o diretório
  fs.mkdirSync(reportDir);
  console.log('Diretório "reports" criado.');
} else {
  console.log('Diretório "reports" já existe.');
}
