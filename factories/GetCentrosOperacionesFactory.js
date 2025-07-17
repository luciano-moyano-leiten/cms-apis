import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { getCentrosOperacionesHandler } from '..//handlers/centrosOperaciones/getCentrosOperacionesHandler.js';

export class GetCentrosOperacionesFactory extends CMSFactoryInterface {
  createHandler() {
    return getCentrosOperacionesHandler;
  }

  createLogger() {
    return () => console.log('[GetCentrosOperacionesFactory] Ejecutando handler de centros de operaciones');
  }

  createValidator() {
    return () => true; // no recibe parámetros
  }
}
