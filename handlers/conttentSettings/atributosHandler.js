import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleAtributos = async ({ IdVista, Id, body }) => {
  const vista = IdVista;
  const id = Id;

  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.GET_ATRIBUTOS_CMS}?IdVista=${vista}&Id=${id}`;

  // Este body debe ser un array directo (según el Swagger)
  const filtros = Array.isArray(body?.filtros) ? body.filtros : [];

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filtros)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error del servidor en atributos: ${JSON.stringify(data)}`);
  }

  return data;
};


