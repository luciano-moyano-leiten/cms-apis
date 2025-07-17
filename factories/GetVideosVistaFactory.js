import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetVideosVista } from '../handlers/getVideosVistaHandler.js';

export class GetVideosVistaFactory extends CMSFactoryInterface {
  createHandler() {
    return (params) => handleGetVideosVista(params);
  }

  createLogger() {
    return ({ IdVista }) => console.log(`[GetVideosVistaFactory] Buscando videos para vista ${IdVista}`);
  }

  createValidator() {
    return ({ IdVista }) => !!IdVista;
  }
}
