import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getHeaders } from './utils/getHeaders.js';
const TOKEN = process.env.CMS_TOKEN;

export const handleAtributos = async ({ IdVista, Id, body }) => {
    const vista = IdVista || 15;
    const id = Id || 4;
    const url = `${API_ENDPOINTS_CONTTENTSETTINGS.ATRIBUTOS}?IdVista=${vista}&Id=${id}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body || {})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data);
    return data;
};