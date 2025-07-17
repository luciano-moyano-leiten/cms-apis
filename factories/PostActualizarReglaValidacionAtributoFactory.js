import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { postActualizarReglaValidacionAtributoHandler } from '../handlers/reglasDeValidacion/postActualizarReglaValidacionAtributoHandler.js';

export class PostActualizarReglaValidacionAtributoFactory extends CMSFactoryInterface {
  createHandler() {
    return postActualizarReglaValidacionAtributoHandler;
  }

  createLogger() {
    return () => console.log('[PostActualizarReglaValidacionAtributoFactory] Ejecutando handler');
  }

  createValidator() {
    return ({ body }) => !!body && typeof body === 'object';
  }
}
