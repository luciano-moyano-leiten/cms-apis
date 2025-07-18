import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetFichaProducto } from '../handlers/conttentSettings/getFichaProductoHandler.js';

export class GetFichaProductoFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ IdVista, IdProducto }) => handleGetFichaProducto({ IdVista, IdProducto });
  }

  createLogger() {
    return () => console.log('[GetFichaProductoFactory] Ejecutando GetFichaProducto');
  }

  createValidator() {
    return (params) => !!params.IdVista && !!params.IdProducto;
  }
}
