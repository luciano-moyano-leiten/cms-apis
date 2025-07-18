import fetch from 'node-fetch';
import { API_ENDPOINTS_ATRIBUTOS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleGetSegmentos = async () => {
  const url = API_ENDPOINTS_ATRIBUTOS.GET_SEGMENTOS;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener segmentos: ${JSON.stringify(data)}`);
  }

  return data;
};
