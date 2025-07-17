import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetAtributos } from '../handlers/getAtributosHandler.js';

export class GetAtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetAtributos(); // sin params
  }

  createLogger() {
    return () => console.log('[GetAtributosFactory] Ejecutando GetAtributos');
  }

  createValidator() {
    return () => true; // no requiere parámetros
  }
}
