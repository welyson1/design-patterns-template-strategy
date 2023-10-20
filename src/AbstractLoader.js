export default class AbstractLoader {
  // Este método deve ser implementado em subclasses.
  load(filename) {
    throw new Error('Should implement load method...');
  }
}