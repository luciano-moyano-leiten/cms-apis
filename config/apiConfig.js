//CONFIG DE LA API
import dotenv from 'dotenv';

dotenv.config();

export const API_BASE_URL = process.env.API_BASE_URL;

export const API_ENDPOINTS_CONTTENTSETTINGS = {
    POST_CARRUSEL: `${API_BASE_URL}/ContentSettings/GetCarruselConfig`,
    GET_BANNER_VISTA: `${API_BASE_URL}/ContentSettings/GetBannersVista`,
    GET_ATRIBUTOS_CMS: `${API_BASE_URL}/ContentSettings/GetAtributosCMS`,
    GET_COMPARATIVO_PRODUCTO: `${API_BASE_URL}/ContentSettings/GetComparativoProducto`,
    GET_VISTAS: `${API_BASE_URL}/ContentSettings/ContentSettings/GetVistas`,
    GET_VISTA: `${API_BASE_URL}/ContentSettings/ContentSettings/GetVista/IdVista`,
    GET_MENU: `${API_BASE_URL}/ContentSettings/ContentSettings/GetMenu`,
    DELETE_TIPO_CONTENIDO: `${API_BASE_URL}/ContentSettings/DeleteTipoContenido`,
    DELETE_IMAGEN: `${API_BASE_URL}/ContentSettings/DeleteImagen`,
    GET_CONTENIDO_FICHA_ITEM: `${API_BASE_URL}/ContentSettings/GetContenidoFichaItem`,
    GET_CONTENIDO_FICHA_SUCURSAL_ITEM: `${API_BASE_URL}/ContentSettings/GetContenidoFichaSucursalItem`,
    GET_EVENTOS: `${API_BASE_URL}/ContentSettings/GetEventos`,
    GET_FICHA_PRODUCTO: `${API_BASE_URL}/ContentSettings/GetFichaProducto`,
    GET_IMAGEN: `${API_BASE_URL}/ContentSettings/GetImagen`,
    GET_IMAGEN_BY_ID_IMAGEN: `${API_BASE_URL}/ContentSettings/GetImagenByIdImagen`,
    GET_IMAGENES: `${API_BASE_URL}/ContentSettings/GetImagenes`,
    GET_ITEMS: `${API_BASE_URL}/ContentSettings/GetItems`,
    GET_MIME_TYPES: `${API_BASE_URL}/ContentSettings/GetMimeTypes`,
    GET_TIPOS_CONTENIDO: `${API_BASE_URL}/ContentSettings/GetTiposContenido`,
    GET_TIPOS_CONTENIDO_1: `${API_BASE_URL}/ContentSettings/GetTiposContenido1`,


};

export const API_ENDPOINTS_ATRIBUTOS = {
    POST_ATRIBUTOS: `${API_BASE_URL}/Atributos/ActualizarAtributos`,
    GET_ATRIBUTOS: `${API_BASE_URL}/Atributos/GetAtributos`,
    DELETE_ATRIBUTO: `${API_BASE_URL}/Atributos/DeleteAtributo/IdAtributo`,
    GET_MARCAS: `${API_BASE_URL}/Atributos/GetMarcas`,
    GET_GRUPOS_PRODUCTOS: `${API_BASE_URL}/Atributos/GetGruposProductos`,
    GET_SEGMENTOS: `${API_BASE_URL}/Atributos/GetSegmentos`,
    GET_TIPOS_PRODUCTO: `${API_BASE_URL}/Atributos/GetTiposProducto`,
    GET_MOTORIZACIONES_PRODUCTOS: `${API_BASE_URL}/Atributos/GetMotorizacionesProductos`,
    GET_CATEGORIA_PRODUCTO: `${API_BASE_URL}/Atributos/GetCategoriaProducto`,
    GET_TIPOS_PRDUCTOS: `${API_BASE_URL}/Atributos/GetTiposProducto`,
}
