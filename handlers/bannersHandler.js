import fetch from 'node-fetch';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';
import { getHeaders } from './utils/getHeaders.js';
const TOKEN = process.env.CMS_TOKEN;

export const handleBanners = async ({ IdVista }) => {
  const vista = IdVista;
  const url = `${API_ENDPOINTS_CONTTENTSETTINGS.BANNERS}?IdVista=${vista}`;
  //const response = await fetch(url, { headers: getHeaders() });
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization':`702de3e9-9f5e-4509-a29a-9a009c4d6801`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data);
  return data;
};