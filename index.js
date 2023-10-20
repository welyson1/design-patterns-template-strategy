import CitiesReporterFactory from './src/CitiesReporterFactory.js';

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

const reporterFactory = CitiesReporterFactory.getInstance(); // Use o método estático getInstance

// Crie uma instância do CitiesReporter com o formato desejado (param1) usando a fábrica.
const reporter = reporterFactory.createReporter(param1);
const output = reporter.report(filename);

console.log(output);

// Testar Singleton
const factory1 = CitiesReporterFactory.getInstance(); // Use o método estático getInstance
const factory2 = CitiesReporterFactory.getInstance();

console.log(factory1 === factory2); // Deve retornar true, pois são a mesma instância da fábrica




