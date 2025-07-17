import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetSegmentos } from '../handlers/getSegmentosHandler.js';

export class GetSegmentosFactory extends CMSFactoryInterface {
  createHandler() {
    return () => handleGetSegmentos();
  }

  createLogger() {
    return () => console.log('[GetSegmentosFactory] Ejecutando GetSegmentos');
  }

  createValidator() {
    return () => true; // No necesita parámetros
  }
}
