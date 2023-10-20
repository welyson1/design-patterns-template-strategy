import AbstractFormater from './AbstractFormater.js';

// Classe que representa um formater TXT para relatórios de cidades
export default class FormaterTXT extends AbstractFormater {
  // Método para formatar os dados das cidades em texto
  output(cities) {
    let txt = `Relatório de Nomes de Cidades
============================\n`;

    // Itera sobre a lista de cidades
    for (let i = 0; i < cities.length; i++) {
      // Adiciona o nome da cidade ao texto
      txt += `- ${cities[i]['Nome']}\n`;
    }

    // Retorna o texto formatado
    return txt;
  }
}