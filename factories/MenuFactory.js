import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleMenu } from '../handlers/menuHandler.js';

export class MenuFactory extends CMSFactoryInterface {
  createHandler() {
    return handleMenu;
  }

  createLogger() {
    return () => console.log('[MenuFactory] Ejecutando menu');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
