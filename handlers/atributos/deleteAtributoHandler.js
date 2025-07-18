import fetch from 'node-fetch';
import { API_ENDPOINTS_ATRIBUTOS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleDeleteAtributo = async ({ IdAtributo }) => {
  const url = `${API_ENDPOINTS_ATRIBUTOS.DELETE_ATRIBUTO}/${IdAtributo}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Error al eliminar atributo: ${errorData}`);
  }

  return { success: true };
};
