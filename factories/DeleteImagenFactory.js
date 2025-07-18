import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleDeleteImagen } from '../handlers/conttentSettings/handleDeleteImagen.js';

export class DeleteImagenFactory extends CMSFactoryInterface {
  createHandler() {
    return handleDeleteImagen;
  }

  createLogger() {
    return () => console.log('[DeleteImagenFactory] Eliminando imagen...');
  }

  createValidator() {
    return (params) => !!params.IdMediaEntity;
  }
}
