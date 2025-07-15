import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getHeaders } from './utils/getHeaders.js';
import { getToken } from './utils/tokenManager.js';
const TOKEN = process.env.CMS_TOKEN;

export const handleMenu = async ({ IdVista, IdMenu }) => {
    const vista = IdVista;
    const menu = IdMenu;
    const url = `${API_ENDPOINTS_CONTTENTSETTINGS.MENU}/IdVista/${vista}/IdMenu/${menu}`;
    //const response = await fetch(url, { headers: getHeaders() });
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Error al obtener Menu: ${JSON.stringify(data)}`);
    }
    return data;
};