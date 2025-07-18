import fetch from 'node-fetch';
import { API_ENDPOINTS_ATRIBUTOS } from '../../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleGetMarcas = async () => {
  const url = API_ENDPOINTS_ATRIBUTOS.GET_MARCAS;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener marcas: ${JSON.stringify(data)}`);
  }

  return data;
};
