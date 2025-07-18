import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetImagenByIdImagen } from '../handlers/conttentSettings/handleGetImagenByIdImagen.js';

export class GetImagenByIdImagenFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ Id }) => handleGetImagenByIdImagen({ Id });
  }

  createLogger() {
    return () => console.log('[GetImagenByIdImagenFactory] Ejecutando GetImagenByIdImagen');
  }

  createValidator() {
    return (params) => !!params.Id;
  }
}
