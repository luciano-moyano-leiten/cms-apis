import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleGetItems } from '../handlers/conttentSettings/getItemsHandler.js';

export class GetItemsFactory extends CMSFactoryInterface {
  createHandler() {
    return ({ IdVista, IdSucursal, nPagina, ItemsPorPagina }) =>
      handleGetItems({ IdVista, IdSucursal, nPagina, ItemsPorPagina });
  }

  createLogger() {
    return () => console.log('[GetItemsFactory] Ejecutando GetItems');
  }

  createValidator() {
    return (params) =>
      typeof params.IdVista !== 'undefined' &&
      typeof params.IdSucursal !== 'undefined' &&
      typeof params.nPagina !== 'undefined' &&
      typeof params.ItemsPorPagina !== 'undefined';
  }
}
