import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleCarrousel } from '../handlers/conttentSettings/handleCarrousel.js';

export class CarrouselFactory extends CMSFactoryInterface {
  createHandler() {
    return handleCarrousel;
  }

  createLogger() {
    return () => console.log('[CarrouselFactory] Ejecutando carrousel');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}