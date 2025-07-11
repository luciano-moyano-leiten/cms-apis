import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleAtributos } from '../handlers/atributosHandler.js';

export class AtributoslFactory extends CMSFactoryInterface {
  createHandler() {
    return handleAtributos;
  }

  createLogger() {
    return () => console.log('[CarrouselFactory] Ejecutando atributos');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}