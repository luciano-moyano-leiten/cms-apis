import fetch from 'node-fetch';
import { getToken } from '../utils/tokenManager.js';
import { API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS } from '../../config/apiConfig.js';

export const postActualizarReglaValidacionAtributoHandler = async ({ body }) => {
  const url = API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS.POST;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Error en postActualizarReglaValidacionAtributoHandler: ${JSON.stringify(data)}`);
  }

  return data;
};
