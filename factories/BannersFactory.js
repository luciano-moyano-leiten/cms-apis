import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleBanners } from '../handlers/bannersHandler.js';

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
