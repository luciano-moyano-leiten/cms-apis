import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleContenidoFichaSucursalItem } from '../handlers/conttentSettings/contenidoFichaSucursalItemHandler.js';

export class ContenidoFichaSucursalItemFactory extends CMSFactoryInterface {
  createHandler() {
    return handleContenidoFichaSucursalItem;
  }

  createLogger() {
    return () => console.log('[ContenidoFichaSucursalItemFactory] Ejecutando ficha sucursal item');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
