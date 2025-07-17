import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from './utils/tokenManager.js';

export const handleGetTiposContenido = async () => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_TIPOS_CONTENIDO}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener tipos de contenido: ${JSON.stringify(data)}`);
  }

  return data;
};
