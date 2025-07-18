import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleComparativo = async ({ IdVista, IdProducto }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_COMPARATIVO_PRODUCTO}?IdVista=${IdVista}&IdProducto=${IdProducto}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener comparativo: ${JSON.stringify(data)}`);
  }

  return data;
};
