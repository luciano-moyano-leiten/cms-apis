import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { handleComparativo } from '../handlers/conttentSettings/handleComparativo.js';

export class ComparativoFactory extends CMSFactoryInterface {
  createHandler() {
    return handleComparativo;
  }

  createLogger() {
    return () => console.log('[ComparativoFactory] Ejecutando comparativo');
  }

  createValidator() {
    return (params) => !!params.IdVista && !!params.IdProducto;
  }
}
