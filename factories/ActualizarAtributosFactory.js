import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleActualizarAtributos } from '../handlers/atributos/actualizarAtributoHandler.js';

export class ActualizarAtributosFactory extends CMSFactoryInterface {
  createHandler() {
    return handleActualizarAtributos;
  }

  createLogger() {
    return () => console.log('[ActualizarAtributosFactory] Ejecutando actualización de atributos');
  }

  createValidator() {
    return (params) => !!params.IdVista && !!params.Id;
  }
}
