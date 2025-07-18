import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleBanners } from '../handlers/conttentSettings/bannersHandler.js';

export class BannersFactory extends CMSFactoryInterface {
  createHandler() {
    return handleBanners;
  }

  createLogger() {
    return () => console.log('[BannersFactory] Ejecutando banners');
  }

  createValidator() {
    return (params) => !!params.IdVista;
  }
}
