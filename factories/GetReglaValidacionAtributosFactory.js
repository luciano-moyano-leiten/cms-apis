import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { getReglaValidacionAtributosHandler } from '../handlers/reglasDeValidacion/getReglaValidacionAtributosHandler.js';

export class GetReglaValidacionAtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return getReglaValidacionAtributosHandler;
  }

  createLogger() {
    return () => console.log('[GetReglaValidacionAtributosFactory] Ejecutando handler');
  }

  createValidator() {
    return () => true; // No necesita validación de parámetros
  }
}
