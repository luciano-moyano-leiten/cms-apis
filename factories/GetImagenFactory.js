import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetImagen } from '../handlers/conttentSettings/handleGetImagen.js';

export class GetImagenFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ Id, TipoContenido }) => handleGetImagen({ Id, TipoContenido });
  }

  createLogger() {
    return () => console.log('[GetImagenFactory] Ejecutando GetImagen');
  }

  createValidator() {
    return (params) => !!params.Id && !!params.TipoContenido;
  }
}
