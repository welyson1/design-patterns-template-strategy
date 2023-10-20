import CitiesReporter from './CitiesReporter.js';
import JSONLoader from './JSONLoader.js';
import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';

// A classe "CitiesReporterFactory" é definida. Ela é responsável por criar e gerenciar instâncias do "CitiesReporter."
// Classe que representa uma fábrica de relatórios de cidades
export default class CitiesReporterFactory {
  constructor() {
    // Inicializa a instância da fábrica como nula
    this._instance = null;
    // Inicializa o loader com uma instância de JSONLoader
    this._loader = new JSONLoader();
  }

  // Método para criar um relatório de cidades com o formato especificado
  createReporter(format) {
    let formater;

    // Verifica o formato desejado
    if (format === 'txt') {
      // Cria um formater TXT se o formato for 'txt'
      formater = new FormaterTXT();
    } else {
      // Caso contrário, cria um formater HTML
      formater = new FormaterHTML();
    }

    // Retorna uma nova instância de CitiesReporter com o loader e o formater
    return new CitiesReporter(this._loader, formater);
  }

  // Método estático para obter uma única instância da fábrica (padrão Singleton)
  static getInstance() {
    // Se a instância não existe, cria uma nova
    if (!this._instance) {
      this._instance = new CitiesReporterFactory();
    }

    // Retorna a instância existente ou a recém-criada
    return this._instance;
  }
}