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
    VISTA: `${API_BASE_URL}/ContentSettings/ContentSettings/GetVista/IdVista`,
    MENU: `${API_BASE_URL}/ContentSettings/ContentSettings/GetMenu`,
    DELETE_TIPO_CONTENIDO: `${API_BASE_URL}/ContentSettings/DeleteTipoContenido`,
    DELETE_IMAGEN: `${API_BASE_URL}/ContentSettings/DeleteImagen`,
    CONTENIDO_FICHA_ITEM: `${API_BASE_URL}/ContentSettings/GetContenidoFichaItem`,
    CONTENIDO_FICHA_SUCURSAL_ITEM: `${API_BASE_URL}/ContentSettings/GetContenidoFichaSucursalItem`,
};

export const API_ENDPOINTS_ATRIBUTOS = {
    POST_ATRIBUTOS: `${API_BASE_URL}/Atributos/ActualizarAtributos`,
    GET_ATRIBUTOS: `${API_BASE_URL}/Atributos/GetAtributos`,
    DELETE_ATRIBUTO: `${API_BASE_URL}/Atributos/DeleteAtributo/IdAtributo`,
    GET_MARCAS: `${API_BASE_URL}/Atributos/GetMarcas`,
}
