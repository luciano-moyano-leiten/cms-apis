import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetAtributos } from '../handlers/atributos/handleGetAtributos.js';

export class GetAtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return handleGetAtributos;
  }

  createLogger() {
    return () => console.log('[GetAtributosFactory] Ejecutando GetAtributos');
  }

  createValidator() {
    // No requiere validación de params, es un GET sin query
    return () => true;
  }
}
