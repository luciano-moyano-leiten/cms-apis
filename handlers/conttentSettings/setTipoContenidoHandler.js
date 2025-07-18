import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleSetTipoContenido = async ({ body }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.SET_TIPO_CONTENIDO}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al setear tipo contenido: ${JSON.stringify(data)}`);
  }

  return data;
};
