import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleVistas } from '../handlers/conttentSettings//getVistasHandler.js';

export class VistasFactory extends CMSFactoryInterface {
  createHandler() {
    return handleVistas;
  }

  createLogger() {
    return () => console.log('[VistasFactory] Ejecutando vistas');
  }

  createValidator() {
    return () => true; // No necesita validación de parámetros
  }
}
