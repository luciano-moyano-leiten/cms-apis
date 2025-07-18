import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetGruposProductos } from '../handlers/atributos/handleGetGruposProductos.js';

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
