import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetTiposContenido1 } from '../handlers/conttentSettings/getTiposContenido1Handler.js';

export class GetTiposContenido1Factory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetTiposContenido1();
  }

  createLogger() {
    return () => console.log('[GetTiposContenido1Factory] Ejecutando GetTiposContenido1');
  }

  createValidator() {
    return () => true; // No requiere parámetros
  }
}
