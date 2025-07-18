import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetMarcas } from '../handlers/atributos/handleGetMarcas.js';

export class GetMarcasFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetMarcas();
  }

  createLogger() {
    return () => console.log('[GetMarcasFactory] Ejecutando GetMarcas');
  }

  createValidator() {
    return () => true; // No requiere parámetros
  }
}
