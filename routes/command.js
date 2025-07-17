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
