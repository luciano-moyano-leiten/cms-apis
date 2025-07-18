import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleGetItems = async ({ IdVista, IdSucursal, nPagina, ItemsPorPagina }) => {
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_ITEMS}?IdVista=${IdVista}&IdSucursal=${IdSucursal}&nPagina=${nPagina}&ItemsPorPagina=${ItemsPorPagina}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener items: ${JSON.stringify(data)}`);
  }

  return data;
};
