import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../../config/apiConfig.js';
import { getToken } from '../utils/tokenManager.js';

export const handleDeleteTipoContenido = async ({ IdTipoContenido }) => {
  if (!IdTipoContenido) {
    throw new Error('El parámetro IdTipoContenido es requerido.');
  }

  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.DELETE_TIPO_CONTENIDO}?IdTipoContenido=${IdTipoContenido}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'application/json'
    }
  });

  const data = await response.text(); 

  if (!response.ok) {
    throw new Error(`Error al eliminar tipo de contenido: ${data}`);
  }

  return { success: true, message: 'Tipo de contenido eliminado correctamente' };
};
