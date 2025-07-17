import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { deleteReglaValidacionAtributoHandler } from '../handlers/reglasDeValidacion/deleteReglaValidacionAtributoHandler.js'

export class DeleteReglaValidacionAtributoFactory extends CMSFactoryInterface {
  createHandler() {
    return deleteReglaValidacionAtributoHandler;
  }

  createLogger() {
    return () => console.log('[DeleteReglaValidacionAtributoFactory] Eliminando regla de validación');
  }

  createValidator() {
    return (params) => !!params?.IdReglaValidacion;
  }
}
