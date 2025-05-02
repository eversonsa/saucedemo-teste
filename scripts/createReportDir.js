const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, '../reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
} else {
  // Limpa o conteúdo da pasta reports/, incluindo subpastas como "html"
  fs.readdirSync(reportsDir).forEach(file => {
    const filePath = path.join(reportsDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursivamente remove diretórios
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      // Remove arquivos
      fs.unlinkSync(filePath);
    }
  });
}

console.log('Diretório "reports/" limpo com sucesso.');