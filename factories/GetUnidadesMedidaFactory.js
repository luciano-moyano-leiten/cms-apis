import { CMSFactoryInterface } from './CMSFactoryInterface.js';
import { getUnidadesMedidaHandler } from '..//handlers/unidadesMedida/GetUnidadesMedida.js';

export class GetUnidadesMedidaFactory extends CMSFactoryInterface {
  createHandler() {
    return getUnidadesMedidaHandler;
  }

  createLogger() {
    return () => console.log('[GetUnidadesMedidaFactory] Ejecutando get unidades de medida');
  }

  createValidator() {
    return () => true; // No requiere parámetros
  }
}
