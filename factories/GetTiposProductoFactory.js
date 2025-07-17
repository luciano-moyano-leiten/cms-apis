import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetTiposProducto } from '../handlers/getTiposProductoHandler.js';

export class GetTiposProductoFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetTiposProducto();
  }

  createLogger() {
    return () => console.log('[GetTiposProductoFactory] Ejecutando GetTiposProducto');
  }

  createValidator() {
    return () => true; // No necesita parámetros
  }
}
