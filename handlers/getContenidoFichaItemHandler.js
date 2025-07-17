import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from './utils/tokenManager.js';

export const handleContenidoFichaItem = async ({ IdVista, idSucursal }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_CONTENIDO_FICHA_ITEM}?IdVista=${IdVista}&idSucursal=${idSucursal}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Error al obtener Contenido Ficha Item: ${JSON.stringify(data)}`);
  }

  return data;
};
