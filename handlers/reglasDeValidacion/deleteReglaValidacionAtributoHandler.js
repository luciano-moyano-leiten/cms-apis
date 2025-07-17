import fetch from 'node-fetch';
import { getToken } from '../utils/tokenManager.js';
import { API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS } from '../../config/apiConfig.js';

export const deleteReglaValidacionAtributoHandler = async ({ IdReglaValidacion }) => {
  const url = `${API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS.DELETE}/IdReglaValidacion/${IdReglaValidacion}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': getToken()
    }
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Error en deleteReglaValidacionAtributoHandler: ${JSON.stringify(data)}`);
  }

  return data;
};
