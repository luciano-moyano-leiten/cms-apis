import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleDeleteAtributo } from '../handlers/atributos/deleteAtributoHandler.js';

export class DeleteAtributoFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ IdAtributo }) => handleDeleteAtributo({ IdAtributo });
  }

  createLogger() {
    return () => console.log('[DeleteAtributoFactory] Ejecutando DeleteAtributo');
  }

  createValidator() {
    return (params) => !!params.IdAtributo;
  }
}
