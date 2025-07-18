import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleSetImagen = async ({ TipoEntidad, IdEntitidad, body }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.SET_IMAGEN}?TipoEntidad=${TipoEntidad}&IdEntitidad=${IdEntitidad}`;

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
    throw new Error(`Error al setear imagen: ${JSON.stringify(data)}`);
  }

  return data;
};
