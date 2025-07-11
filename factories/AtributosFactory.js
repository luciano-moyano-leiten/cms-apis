import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleAtributos } from '../handlers/atributosHandler.js';

export class AtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return handleAtributos;
  }

  createLogger() {
    return () => console.log('[AtributosFactory] Ejecutando atributos');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}