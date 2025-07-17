import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetEventos } from '../handlers/getEventosHandler.js';

export class GetEventosFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ IdVista }) => handleGetEventos({ IdVista });
  }

  createLogger() {
    return () => console.log('[GetEventosFactory] Ejecutando GetEventos');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
