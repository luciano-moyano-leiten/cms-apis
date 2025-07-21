import express from 'express';
import { CMSAbstractFactory } from '../factories/CMSAbstractFactory.js';

import { DeleteTipoContenidoFactory } from '../factories/DeleteTipoContenidoFactory.js';
import { DeleteImagenFactory } from '../factories/DeleteImagenFactory.js';
//import { ContenidoFichaItemFactory } from '../factories/ContenidoFichaItemFactory.js';
import { ContenidoFichaSucursalItemFactory } from '../factories/ContenidoFichaSucursalItemFactory.js';
import { DeleteAtributoFactory } from '../factories/DeleteAtributoFactory.js';

import { SetImagenFactory } from '../factories/SetImagenFactory.js';
import { SetTipoContenidoFactory } from '../factories/SetTipoContenidoFactory.js';

import { PostActualizarReglaValidacionAtributoFactory } from '../factories/PostActualizarReglaValidacionAtributoFactory.js';
import { DeleteReglaValidacionAtributoFactory } from '../factories/DeleteReglaValidacionAtributoFactory.js';

import { HandleFactory } from '../factories/handleFactory.js';
import { handleCarrousel } from '../handlers/conttentSettings/carrouselHandler.js';
import { handleBanners } from '../handlers/conttentSettings/bannersHandler.js';
import { handleAtributos } from '../handlers/conttentSettings/atributosHandler.js';
import { handleActualizarAtributos } from '../handlers/atributos/actualizarAtributoHandler.js';
import { handleComparativo } from '../handlers/conttentSettings/comparativoHandler.js';
import { handleVistas } from '../handlers/conttentSettings/getVistasHandler.js';
import { handleVista } from '../handlers/conttentSettings/getVistaHandler.js';
import { handleMenu } from '../handlers/conttentSettings/getMenuHandler.js';
import { handleGetAtributos } from '../handlers/atributos/getAtributosHandler.js';
import { handleGetMarcas } from '../handlers/atributos/getMarcasHandler.js';
import { handleGetGruposProductos } from '../handlers/atributos/getGruposProductosHandler.js';
import { handleGetSegmentos } from '../handlers/atributos/getSegmentosHandler.js';
import { handleGetTiposProducto } from '../handlers/atributos/getTiposProductoHandler.js';
import { handleGetMotorizacionesProductos } from '../handlers/atributos/getMotorizacionesProductosHandler.js';
import { handleGetCategoriaProducto } from '../handlers/atributos/getCategoriaProductoHandler.js';
import { handleGetEventos } from '../handlers/conttentSettings/getEventosHandler.js';
import { handleGetFichaProducto } from '../handlers/conttentSettings/getFichaProductoHandler.js';
import { handleGetImagen } from '../handlers/conttentSettings/getImagenHandler.js';
import { handleGetImagenByIdImagen } from '../handlers/conttentSettings/getImagenByIdImagenHandler.js';
import { handleGetImagenes } from '../handlers/conttentSettings/getImagenesHandler.js';
import { handleGetItems } from '../handlers/conttentSettings/getItemsHandler.js';
import { handleGetMimeTypes } from '../handlers/conttentSettings/getMimeTypesHandler.js';
import { handleGetTiposContenido } from '../handlers/conttentSettings/getTiposContenidoHandler.js';
import { handleGetTiposContenido1 } from '../handlers/conttentSettings/getTiposContenido1Handler.js';
import { handleGetVideosVista } from '../handlers/conttentSettings/getVideosVistaHandler.js';
import { handleGetUnidadesMedida } from '../handlers/unidadesMedida/GetUnidadesMedida.js';
import { getReglaValidacionAtributosHandler } from '../handlers/reglasDeValidacion/getReglaValidacionAtributosHandler.js';
import { getCentrosOperacionesHandler } from '../handlers/centrosOperaciones/getCentrosOperacionesHandler.js';


const router = express.Router();

// Registrar factories
/* CMSAbstractFactory.register('carrousel', new HandleFactory(handleCarrousel,'[CarrouselFactory] Ejecutando carrousel'));
CMSAbstractFactory.register('banners', new HandleFactory(handleBanners, '[BannersFactory] Ejecutando banners'));
CMSAbstractFactory.register('atributos', new HandleFactory(handleAtributos, '[AtributosFactory] Ejecutando atributos'));
CMSAbstractFactory.register('actualizarAtributos', new HandleFactory(handleActualizarAtributos, '[ActualizarAtributosFactory] Ejecutando actualizar atributos'));
CMSAbstractFactory.register('comparativo', new HandleFactory( handleComparativo, '[ComparativoFactory] Ejecutando comparativo', (params) => !!params.IdVista && !!params.IdProducto)); 
CMSAbstractFactory.register('vistas', new HandleFactory(handleVistas, '[VistasFactory] Ejecutando vistas'));
CMSAbstractFactory.register('vista', new HandleFactory( handleVista, '[VistaFactory] Ejecutando vista', (params) => !!params.IdVista));
CMSAbstractFactory.register('menu', new MenuFactory());
CMSAbstractFactory.register('deleteTipoContenido', new DeleteTipoContenidoFactory());
CMSAbstractFactory.register('deleteImagen', new DeleteImagenFactory());
CMSAbstractFactory.register('contenidoFichaItem', new ContenidoFichaItemFactory());
CMSAbstractFactory.register('contenidoFichaSucursalItem', new ContenidoFichaSucursalItemFactory());
CMSAbstractFactory.register('getAtributos', new GetAtributosFactory());
CMSAbstractFactory.register('deleteAtributo', new DeleteAtributoFactory());
CMSAbstractFactory.register('getMarcas', new GetMarcasFactory());
CMSAbstractFactory.register('getGruposProductos', new GetGruposProductosFactory());
CMSAbstractFactory.register('getSegmentos', new GetSegmentosFactory());
CMSAbstractFactory.register('getTiposProducto', new GetTiposProductoFactory());
CMSAbstractFactory.register('getMotorizacionesProductos', new GetMotorizacionesProductosFactory());
CMSAbstractFactory.register('getCategoriaProducto', new GetCategoriaProductoFactory());
CMSAbstractFactory.register('getEventos', new GetEventosFactory());
CMSAbstractFactory.register('getFichaProducto', new GetFichaProductoFactory());
CMSAbstractFactory.register('getImagen', new GetImagenFactory());
CMSAbstractFactory.register('getImagenByIdImagen', new GetImagenByIdImagenFactory());
CMSAbstractFactory.register('getImagenes', new GetImagenesFactory());
CMSAbstractFactory.register('getItems', new GetItemsFactory());
CMSAbstractFactory.register('getMimeTypes', new GetMimeTypesFactory());
CMSAbstractFactory.register('getTiposContenido', new GetTiposContenidoFactory());
CMSAbstractFactory.register('getTiposContenido1', new GetTiposContenido1Factory());
CMSAbstractFactory.register('getVideosVista', new GetVideosVistaFactory());
CMSAbstractFactory.register('setImagen', new SetImagenFactory());
CMSAbstractFactory.register('setTipoContenido', new SetTipoContenidoFactory());
CMSAbstractFactory.register('getUnidadesMedida', new GetUnidadesMedidaFactory());
CMSAbstractFactory.register('getReglaValidacionAtributos', new GetReglaValidacionAtributosFactory());
CMSAbstractFactory.register('postActualizarReglaValidacionAtributo', new PostActualizarReglaValidacionAtributoFactory());
CMSAbstractFactory.register('deleteReglaValidacionAtributo', new DeleteReglaValidacionAtributoFactory());
CMSAbstractFactory.register('getCentrosOperaciones', new GetCentrosOperacionesFactory()); */

// FACTORIES SIMPLES CON HandleFactory
CMSAbstractFactory.register('carrousel', new HandleFactory(handleCarrousel, '[CarrouselFactory] Ejecutando carrousel'));
CMSAbstractFactory.register('banners', new HandleFactory(handleBanners, '[BannersFactory] Ejecutando banners'));
CMSAbstractFactory.register('atributos', new HandleFactory(handleAtributos, '[AtributosFactory] Ejecutando atributos'));
CMSAbstractFactory.register('actualizarAtributos', new HandleFactory(handleActualizarAtributos, '[ActualizarAtributosFactory] Ejecutando actualizar atributos'));
CMSAbstractFactory.register('comparativo', new HandleFactory(handleComparativo, '[ComparativoFactory] Ejecutando comparativo', (params) => !!params.IdVista && !!params.IdProducto));
CMSAbstractFactory.register('vistas', new HandleFactory(handleVistas, '[VistasFactory] Ejecutando vistas'));
CMSAbstractFactory.register('vista', new HandleFactory(handleVista, '[VistaFactory] Ejecutando vista'));
CMSAbstractFactory.register('menu', new HandleFactory(handleMenu, '[MenuFactory] Ejecutando menú'));
CMSAbstractFactory.register('getAtributos', new HandleFactory(handleGetAtributos, '[GetAtributosFactory] Ejecutando getAtributos'));
CMSAbstractFactory.register('getMarcas', new HandleFactory(handleGetMarcas, '[GetMarcasFactory] Ejecutando getMarcas'));
CMSAbstractFactory.register('getGruposProductos', new HandleFactory(handleGetGruposProductos, '[GetGruposProductosFactory] Ejecutando getGruposProductos'));
CMSAbstractFactory.register('getSegmentos', new HandleFactory(handleGetSegmentos, '[GetSegmentosFactory] Ejecutando getSegmentos'));
CMSAbstractFactory.register('getTiposProducto', new HandleFactory(handleGetTiposProducto, '[GetTiposProductoFactory] Ejecutando getTiposProducto'));
CMSAbstractFactory.register('getMotorizacionesProductos', new HandleFactory(handleGetMotorizacionesProductos, '[GetMotorizacionesProductosFactory] Ejecutando getMotorizacionesProductos'));
CMSAbstractFactory.register('getCategoriaProducto', new HandleFactory(handleGetCategoriaProducto, '[GetCategoriaProductoFactory] Ejecutando getCategoriaProducto'));
CMSAbstractFactory.register('getEventos', new HandleFactory(handleGetEventos, '[GetEventosFactory] Ejecutando getEventos'));
CMSAbstractFactory.register('getFichaProducto', new HandleFactory(handleGetFichaProducto, '[GetFichaProductoFactory] Ejecutando getFichaProducto'));
CMSAbstractFactory.register('getImagen', new HandleFactory(handleGetImagen, '[GetImagenFactory] Ejecutando getImagen'));
CMSAbstractFactory.register('getImagenByIdImagen', new HandleFactory(handleGetImagenByIdImagen, '[GetImagenByIdImagenFactory] Ejecutando getImagenByIdImagen'));
CMSAbstractFactory.register('getImagenes', new HandleFactory(handleGetImagenes, '[GetImagenesFactory] Ejecutando getImagenes'));
CMSAbstractFactory.register('getItems', new HandleFactory(handleGetItems, '[GetItemsFactory] Ejecutando getItems'));
CMSAbstractFactory.register('getMimeTypes', new HandleFactory(handleGetMimeTypes, '[GetMimeTypesFactory] Ejecutando getMimeTypes'));
CMSAbstractFactory.register('getTiposContenido', new HandleFactory(handleGetTiposContenido, '[GetTiposContenidoFactory] Ejecutando getTiposContenido'));
CMSAbstractFactory.register('getTiposContenido1', new HandleFactory(handleGetTiposContenido1, '[GetTiposContenido1Factory] Ejecutando getTiposContenido1'));
CMSAbstractFactory.register('getVideosVista', new HandleFactory(handleGetVideosVista, '[GetVideosVistaFactory] Ejecutando getVideosVista'));
CMSAbstractFactory.register('getUnidadesMedida', new HandleFactory(handleGetUnidadesMedida, '[GetUnidadesMedidaFactory] Ejecutando getUnidadesMedida'));
CMSAbstractFactory.register('getReglaValidacionAtributos', new HandleFactory(getReglaValidacionAtributosHandler, '[GetReglaValidacionAtributosFactory] Ejecutando getReglaValidacionAtributos'));
CMSAbstractFactory.register('getCentrosOperaciones', new HandleFactory(getCentrosOperacionesHandler, '[GetCentrosOperacionesFactory] Ejecutando getCentrosOperaciones'));

// FACTORIES PERSONALIZADAS (con lógica especial, mantener como están)
CMSAbstractFactory.register('deleteAtributo', new DeleteAtributoFactory());
CMSAbstractFactory.register('deleteTipoContenido', new DeleteTipoContenidoFactory());
CMSAbstractFactory.register('deleteImagen', new DeleteImagenFactory());
//CMSAbstractFactory.register('contenidoFichaItem', new ContenidoFichaItemFactory());
CMSAbstractFactory.register('contenidoFichaSucursalItem', new ContenidoFichaSucursalItemFactory());
CMSAbstractFactory.register('setImagen', new SetImagenFactory());
CMSAbstractFactory.register('setTipoContenido', new SetTipoContenidoFactory());
CMSAbstractFactory.register('postActualizarReglaValidacionAtributo', new PostActualizarReglaValidacionAtributoFactory());
CMSAbstractFactory.register('deleteReglaValidacionAtributo', new DeleteReglaValidacionAtributoFactory());




router.all('/', async (req, res) => {
  const { type, IdVista, IdMenu, Id } = req.method === 'GET' ? req.query : req.body;

  try {
    const factory = CMSAbstractFactory.get(type);
    const validator = factory.createValidator();
    const logger = factory.createLogger();
    const handler = factory.createHandler();


    logger();
    const data = await handler({ IdVista, IdMenu, Id, body: req.body });

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: 'Error ejecutando comando', detail: err.message });
  }
});

router.all('/gets', async (req, res) => {
  const { type, IdVista, IdMenu, Id } = req.method === 'GET' ? req.query : req.body;

  const typeArray = typeof type === 'string'
    ? type.split(',').map(t => t.trim())
    : Array.isArray(type)
      ? type
      : [];

  try {
    const results = {};

    for (const currentType of typeArray) {
      try {
        const factory = CMSAbstractFactory.get(currentType);
        const validator = factory.createValidator();
        const logger = factory.createLogger();
        const handler = factory.createHandler();

        logger();
        const data = await handler({ IdVista, IdMenu, Id, body: req.body });



        results[currentType] = data;
      } catch (errInterno) {
        results[currentType] = {
          error: `Falló el handler para '${currentType}'`,
          detail: errInterno.message
        };
      }
    }

    res.json(results);

  } catch (err) {
    res.status(500).json({ error: 'Error ejecutando múltiples comandos', detail: err.message });
  }
});


export default router;
