import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetImagenes } from '../handlers/getImagenesHandler.js';

export class GetImagenesFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ TipoEntidad, IdEntidad }) => handleGetImagenes({ TipoEntidad, IdEntidad });
  }

  createLogger() {
    return () => console.log('[GetImagenesFactory] Ejecutando GetImagenes');
  }

  createValidator() {
    return (params) => typeof params.TipoEntidad !== 'undefined' && typeof params.IdEntidad !== 'undefined';
  }
}
