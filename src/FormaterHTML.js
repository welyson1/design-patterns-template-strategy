import AbstractFormater from './AbstractFormater.js';

// Classe que representa um formater HTML para relatórios de cidades
export default class FormaterHTML extends AbstractFormater {
  // Método para formatar os dados das cidades em HTML
  output(cities) {
    let html = `
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
`;

    // Loop para adicionar nomes de cidades à lista
    for (let i = 0; i < cities.length; i++) {
      html += `     <li>${cities[i]['Nome']}</li>\n`;
    }

    html += `
    </ul>
  </body>
</html>`;

    // Retorna o HTML gerado
    return html;
  }
}
