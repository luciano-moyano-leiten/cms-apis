import express from 'express';
import { CMSAbstractFactory } from '../factories/CMSAbstractFactory.js';
import { CarrouselFactory } from '../factories/CarrouselFactory.js';
import { BannersFactory } from '../factories/BannersFactory.js';
import { AtributosFactory } from '../factories/AtributosFactory.js';
import { ActualizarAtributosFactory } from '../factories/ActualizarAtributosFactory.js';
import { ComparativoFactory } from '../factories/ComparativoFactory.js';
import { VistasFactory } from '../factories/VistasFactory.js';
import { VistaFactory } from '../factories/VistaFactory.js';
import { MenuFactory } from '../factories/MenuFactory.js';
import { DeleteTipoContenidoFactory } from '../factories/DeleteTipoContenidoFactory.js';
import { DeleteImagenFactory } from '../factories/DeleteImagenFactory.js';
import { ContenidoFichaItemFactory } from '../factories/ContenidoFichaItemFactory.js';
import { ContenidoFichaSucursalItemFactory } from '../factories/ContenidoFichaSucursalItemFactory.js';  
import { GetAtributosFactory } from '../factories/GetAtributosFactory.js';
import { DeleteAtributoFactory } from '../factories/DeleteAtributoFactory.js';
import { GetMarcasFactory } from '../factories/GetMarcasFactory.js';
import { GetGruposProductosFactory } from '../factories/GetGruposProductosFactory.js';
import { GetSegmentosFactory } from '../factories/GetSegmentosFactory.js';
import { GetTiposProductoFactory } from '../factories/GetTiposProductoFactory.js';
import { GetMotorizacionesProductosFactory } from '../factories/GetMotorizacionesProductosFactory.js';
import { GetCategoriaProductoFactory } from '../factories/GetCategoriaProductoFactory.js';
import { GetEventosFactory } from '../factories/GetEventosFactory.js';
import { GetFichaProductoFactory } from '../factories/GetFichaProductoFactory.js';
import { GetImagenFactory } from '../factories/GetImagenFactory.js';
import { GetImagenByIdImagenFactory } from '../factories/GetImagenByIdImagenFactory.js';
import { GetImagenesFactory } from '../factories/GetImagenesFactory.js';
import { GetItemsFactory } from '../factories/GetItemsFactory.js';
import { GetMimeTypesFactory } from '../factories/GetMimeTypesFactory.js';
import { GetTiposContenidoFactory } from '../factories/GetTiposContenidoFactory.js';
import {GetTiposContenido1Factory } from '../factories/GetTiposContenido1Factory.js';
import { GetVideosVistaFactory } from '../factories/GetVideosVistaFactory.js';
import { SetImagenFactory } from '../factories/SetImagenFactory.js';
import { SetTipoContenidoFactory } from '../factories/SetTipoContenidoFactory.js';
import { GetUnidadesMedidaFactory } from '../factories/GetUnidadesMedidaFactory.js';
import { GetReglaValidacionAtributosFactory } from '../factories/GetReglaValidacionAtributosFactory.js';


const router = express.Router();

// Registrar factories
CMSAbstractFactory.register('carrousel', new CarrouselFactory());
CMSAbstractFactory.register('banners', new BannersFactory());
CMSAbstractFactory.register('atributos', new AtributosFactory());
CMSAbstractFactory.register('actualizarAtributos', new ActualizarAtributosFactory());
CMSAbstractFactory.register('comparativo', new ComparativoFactory()); 
CMSAbstractFactory.register('vistas', new VistasFactory());
CMSAbstractFactory.register('vista', new VistaFactory());
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




router.all('/', async (req, res) => {
  const { type, IdVista, IdMenu, Id } = req.method === 'GET' ? req.query : req.body;

  try {
    const factory = CMSAbstractFactory.get(type);
    const validator = factory.createValidator();
    const logger = factory.createLogger();
    const handler = factory.createHandler();

    //const params = { IdVista, IdMenu, Id };

    // if (!validator(params)) {
    //   return res.status(400).json({ error: `Parámetros inválidos para tipo ${type}` });
    // }

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
        //const data = await handler.length === 0
  //? await handler()
 // : await handler({ IdVista, IdMenu, Id, body: req.body });


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
