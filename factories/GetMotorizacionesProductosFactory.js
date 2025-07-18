import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetMotorizacionesProductos } from '../handlers/atributos/getMotorizacionesProductosHandler.js';

export class GetMotorizacionesProductosFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetMotorizacionesProductos();
  }

  createLogger() {
    return () => console.log('[GetMotorizacionesProductosFactory] Ejecutando GetMotorizacionesProductos');
  }

  createValidator() {
    return () => true; // No necesita parámetros
  }
}
