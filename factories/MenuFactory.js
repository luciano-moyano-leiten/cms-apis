import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleMenu } from '../handlers/getMenuHandler.js';

export class MenuFactory extends CMSFactoryInterface {
  createHandler() {
    return handleMenu;
  }

  createLogger() {
    return () => console.log('[MenuFactory] Ejecutando handler de Menú');
  }

  createValidator() {
    return (params) => !!params.IdVista && params.IdMenu !== undefined;
  }
}
