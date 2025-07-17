import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { getCategoriaProductoHandler } from '../handlers/getCategoriaProductoHandler.js';

export class GetCategoriaProductoFactory extends CMSFactoryInterface {
  createHandler() {
    return getCategoriaProductoHandler;
  }

  createLogger() {
    return () => console.log('[GetCategoriaProductoFactory] Ejecutando GetCategoriaProducto');
  }

  createValidator() {
    // No necesita parámetros, es un GET directo sin query
    return () => true;
  }
}
