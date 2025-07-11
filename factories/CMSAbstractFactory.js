export class CMSAbstractFactory {
  static factories = {};

  static register(type, factoryInstance) {
    CMSAbstractFactory.factories[type] = factoryInstance;
  }

  static get(type) {
    const factory = CMSAbstractFactory.factories[type];
    if (!factory) throw new Error(`No hay factory registrada para "${type}"`);
    return factory;
  }
}
