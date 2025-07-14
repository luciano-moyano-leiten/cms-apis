import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';

export const handleAtributos = async ({ IdVista, Id, body }) => {
  const vista = IdVista;
  const id = Id;

  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.ATRIBUTOS}?IdVista=${vista}&Id=${id}`;

  // Aseguramos que siempre se envíe 'filtros' como un array
  const requestBody = {
    filtros: body?.filtros || [{ key : "", value : "" }],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': '702de3e9-9f5e-4509-a29a-9a009c4d6801',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error del servidor en atributos: ${JSON.stringify(data)}`);
  }

  return data;
};
