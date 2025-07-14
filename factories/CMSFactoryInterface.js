export class CMSFactoryInterface {
  createHandler() {
    throw new Error("createHandler no implementado");
  }

  createLogger() {
    return () => {}; // Logger vacío por defecto
  }

  createValidator() {
    return () => true; // Validador vacío por defecto
  }
}