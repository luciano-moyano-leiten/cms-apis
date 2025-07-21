import fetch from 'node-fetch';
import { getToken } from '../utils/tokenManager.js';
import { API_ENDPOINTS_UNIDAD_MEDIDA } from '../../config/apiConfig.js';

export const handleGetUnidadesMedida = async () => {
  const url = `${API_ENDPOINTS_UNIDAD_MEDIDA.GET_UNIDADES_MEDIDA}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error en getUnidadesMedidaHandler: ${JSON.stringify(data)}`);
  }

  return data;
};
