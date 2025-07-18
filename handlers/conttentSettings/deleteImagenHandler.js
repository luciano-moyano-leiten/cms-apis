import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleDeleteImagen = async ({ IdMediaEntity }) => {
  if (!IdMediaEntity) {
    throw new Error('El parámetro IdMediaEntity es requerido.');
  }

  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.DELETE_IMAGEN}?IdMediaEntity=${IdMediaEntity}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.text(); // puede no ser JSON

  if (!response.ok) {
    throw new Error(`Error al eliminar imagen: ${data}`);
  }

  return { success: true, message: 'Imagen eliminada correctamente' };
};
