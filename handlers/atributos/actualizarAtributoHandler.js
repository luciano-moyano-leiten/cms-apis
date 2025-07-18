import fetch from 'node-fetch';
import { API_ENDPOINTS_ATRIBUTOS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleActualizarAtributos = async ({ IdVista, Id, body }) => {
  const vista = IdVista;
  const id = Id;

  const url = `${API_ENDPOINTS_ATRIBUTOS.ATRIBUTOS}?IdVista=${vista}&Id=${id}`;

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
    throw new Error(`Error al actualizar atributos: ${JSON.stringify(data)}`);
  }

  return data;
};
