import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleGetTiposContenido1 = async () => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_TIPOS_CONTENIDO_1}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener tipos de contenido 1: ${JSON.stringify(data)}`);
  }

  return data;
};
