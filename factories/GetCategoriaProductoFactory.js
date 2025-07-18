import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetCategoriaProducto } from '../handlers/atributos/getCategoriaProductoHandler.js';

export class GetCategoriaProductoFactory extends CMSFactoryInterface {
  createHandler() {
    return handleGetCategoriaProducto;
  }

  createLogger() {
    return () => console.log('[GetCategoriaProductoFactory] Ejecutando GetCategoriaProducto');
  }

  createValidator() {
    // No necesita parámetros, es un GET directo sin query
    return () => true;
  }
}
