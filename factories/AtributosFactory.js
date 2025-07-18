import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetAtributos } from '../handlers/atributos/getAtributosHandler.js';

export class AtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return handleGetAtributos;
  }

  createLogger() {
    return () => console.log('[AtributosFactory] Ejecutando atributos');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}