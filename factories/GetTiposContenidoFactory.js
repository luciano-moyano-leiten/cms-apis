import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetTiposContenido } from '../handlers/conttentSettings/handleGetTiposContenido.js';

export class GetTiposContenidoFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetTiposContenido();
  }

  createLogger() {
    return () => console.log('[GetTiposContenidoFactory] Ejecutando GetTiposContenido');
  }

  createValidator() {
    return () => true; // No hay parámetros a validar
  }
}
