import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetGruposProductos } from '../handlers/getGruposProductosHandler.js';

export class GetGruposProductosFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetGruposProductos();
  }

  createLogger() {
    return () => console.log('[GetGruposProductosFactory] Ejecutando GetGruposProductos');
  }

  createValidator() {
    return () => true; // No requiere parámetros
  }
}
