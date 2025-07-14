import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getHeaders } from './utils/getHeaders.js';
const TOKEN = process.env.CMS_TOKEN;

export const handleCarrousel = async ({ IdVista }) => {
    const vista = IdVista;
    const url = `${API_ENDPOINTS_CONTTENTSETTINGS.CARRUSEL}?IdVista=${vista}`;
    // const response = await fetch(url, { headers: getHeaders() });
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `259e21a0-5afa-4ca9-9716-ab2debfc04e1`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Error al obtener carrousel: ${JSON.stringify(data)}`);
    }
    return data;
};
