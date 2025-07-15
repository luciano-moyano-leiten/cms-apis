//CONFIG DE LA API
import dotenv from 'dotenv';

dotenv.config();

export const API_BASE_URL = process.env.API_BASE_URL;

export const API_ENDPOINTS_CONTTENTSETTINGS = {
    CARRUSEL: `${API_BASE_URL}/ContentSettings/GetCarruselConfig`,
    BANNERS: `${API_BASE_URL}/ContentSettings/GetBannersVista`,
    MENU: `${API_BASE_URL}/ContentSettings/ContentSettings/GetMenu`,
    ATRIBUTOS: `${API_BASE_URL}/ContentSettings/GetAtributosCMS`,
    COMPARATIVO: `${API_BASE_URL}/ContentSettings/GetComparativoProducto`,
    VISTAS: `${API_BASE_URL}/ContentSettings/ContentSettings/GetVistas`,
};

export const API_ENDPOINTS_ATRIBUTOS = {
    ATRIBUTOS: `${API_BASE_URL}/Atributos/ActualizarAtributos`,
}