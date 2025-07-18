import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleSetTipoContenido } from '../handlers/conttentSettings/handleSetTipoContenido.js';

export class SetTipoContenidoFactory extends CMSFactoryInterface {
  createHandler() {
    return (params) => handleSetTipoContenido(params);
  }

  createLogger() {
    return () => console.log(`[SetTipoContenidoFactory] Seteando tipo de contenido...`);
  }

  createValidator() {
    return ({ body }) => !!body && typeof body === 'object';
  }
}
