import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleMenu = async ({ IdVista, IdMenu }) => {
  if (!IdVista || IdMenu === undefined) {
    throw new Error('Los parámetros IdVista e IdMenu son requeridos.');
  }

  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_MENU}/IdVista/${IdVista}/IdMenu/${IdMenu}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error al obtener menú: ${JSON.stringify(data)}`);
  }

  return data;
};
