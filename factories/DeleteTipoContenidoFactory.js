import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleDeleteTipoContenido } from '../handlers/conttentSettings/deleteTipoContenidoHandler.js';

export class DeleteTipoContenidoFactory extends CMSFactoryInterface {
  createHandler() {
    return handleDeleteTipoContenido;
  }

  createLogger() {
    return () => console.log('[DeleteTipoContenidoFactory] Eliminando tipo de contenido...');
  }

  createValidator() {
    return (params) => !!params.IdTipoContenido;
  }
}
