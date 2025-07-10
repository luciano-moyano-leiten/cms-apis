//CONFIG DE LA API
import dotenv from 'dotenv';

dotenv.config();

export const API_BASE_URL = process.env.API_BASE_URL;

export const API_ENDPOINTS_CONTTENTSETTINGS = {
    CARRUSEL: `${API_BASE_URL}/ContentSettings/GetCarruselConfig`,
    BANNERS: `${API_BASE_URL}/ContentSettings/GetBannersVista`,
    MENU: `${API_BASE_URL}/ContentSettings/ContentSettings/GetMenu`,
    ATRIBUTOS: `${API_BASE_URL}/ContentSettings/GetAtributosCMS`,
};

