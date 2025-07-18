import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleVista } from '../handlers/conttentSettings/handleVista.js';

export class VistaFactory extends CMSFactoryInterface {
  createHandler() {
    return handleVista;
  }

  createLogger() {
    return () => console.log('[VistaFactory] Ejecutando handler de Vista');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
