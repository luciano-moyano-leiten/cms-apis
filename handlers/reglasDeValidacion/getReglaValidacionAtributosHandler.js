import fetch from 'node-fetch';
import { getToken } from '../utils/tokenManager.js';
import { API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS } from '../../config/apiConfig.js';

export const getReglaValidacionAtributosHandler = async () => {
  const url = `${API_ENDPOINTS_REGLAS_VALIDACION_ATRIBUTOS.GET}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error en getReglaValidacionAtributosHandler: ${JSON.stringify(data)}`);
  }

  return data;
};
