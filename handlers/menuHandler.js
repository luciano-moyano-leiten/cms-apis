import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getHeaders } from './utils/getHeaders.js';
const TOKEN = process.env.CMS_TOKEN;

export const handleMenu = async ({ IdVista, IdMenu }) => {
    const vista = IdVista || 15;
    const menu = IdMenu || 4;
    const url = `${API_ENDPOINTS_CONTTENTSETTINGS.MENU}/IdVista/${vista}/IdMenu/${menu}`;
    const response = await fetch(url, { headers: getHeaders() });
    const data = await response.json();
    if (!response.ok) throw new Error(data);
    return data;
};