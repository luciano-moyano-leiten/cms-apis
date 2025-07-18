import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleGetFichaProducto = async ({ IdVista, IdProducto }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_FICHA_PRODUCTO}?IdVista=${IdVista}&IdProducto=${IdProducto}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener ficha producto: ${JSON.stringify(data)}`);
  }

  return data;
};
