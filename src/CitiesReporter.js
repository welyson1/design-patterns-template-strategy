import AbstractLoader from './AbstractLoader.js'; 
import AbstractFormater from './AbstractFormater.js';

// Classe que representa um relatório de cidades
export default class CitiesReporter {
  constructor(loader, formater) {
    // Inicializa o loader e o formater com os valores passados como argumentos
    this._loader = loader;
    this._formater = formater;
  }

  // Método para gerar um relatório com base em um arquivo
  report(filename) {
    // Carrega os dados do arquivo usando o loader
    const cities = this._loader.load(filename);
    // Formata e retorna os dados das cidades usando o formater
    return this._formater.output(cities);
  }
}