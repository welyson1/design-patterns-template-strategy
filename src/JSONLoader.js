import fs from 'node:fs'; // Importa o módulo 'fs' para lidar com o sistema de arquivos.
import AbstractLoader from './AbstractLoader.js';

// Classe que representa um loader JSON para carregar dados de um arquivo
export default class JSONLoader extends AbstractLoader {
  // Método para carregar e analisar o conteúdo de um arquivo JSON
  load(filename) {
    // Lê e analisa o conteúdo do arquivo especificado
    return JSON.parse(fs.readFileSync(filename));
  }
}