import fetch from 'node-fetch';
import { API_ENDOPOINT_CENTROS_OPERACIONES } from '../atributos/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const getCentrosOperacionesHandler = async () => {
  const url = `${API_ENDOPOINT_CENTROS_OPERACIONES.GET_CENTROS_OPERACIONES}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener centros de operaciones: ${JSON.stringify(data)}`);
  }

  return data;
};
