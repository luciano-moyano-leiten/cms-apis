import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetMimeTypes } from '../handlers/conttentSettings/handleGetMimeTypes.js';

export class GetMimeTypesFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetMimeTypes();
  }

  createLogger() {
    return () => console.log('[GetMimeTypesFactory] Ejecutando GetMimeTypes');
  }

  createValidator() {
    return () => true; // No necesita validación de parámetros
  }
}
