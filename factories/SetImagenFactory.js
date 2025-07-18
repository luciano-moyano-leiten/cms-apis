import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleSetImagen } from '../handlers/conttentSettings/handleSetImagen.js';

export class SetImagenFactory extends CMSFactoryInterface {
  createHandler() {
    return (params) => handleSetImagen(params);
  }

  createLogger() {
    return ({ TipoEntidad, IdEntitidad }) =>
      console.log(`[SetImagenFactory] Seteando imagen en entidad tipo ${TipoEntidad} con ID ${IdEntitidad}`);
  }

  createValidator() {
    return ({ TipoEntidad, IdEntitidad }) => TipoEntidad !== undefined && IdEntitidad !== undefined;
  }
}
