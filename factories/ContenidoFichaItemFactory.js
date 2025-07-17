import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleContenidoFichaItem } from '../handlers/getContenidoFichaItemHandler.js';

export class ContenidoFichaItemFactory extends CMSFactoryInterface {
  createHandler() {
    return handleContenidoFichaItem;
  }

  createLogger() {
    return () => console.log('[ContenidoFichaItemFactory] Ejecutando handler');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
