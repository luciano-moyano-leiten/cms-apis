import express from 'express';
import { CMSAbstractFactory } from '../factories/CMSAbstractFactory.js';
import { CarrouselFactory } from '../factories/CarrouselFactory.js';
import { BannersFactory } from '../factories/BannersFactory.js';
import { MenuFactory } from '../factories/MenuFactory.js';
import { AtributosFactory } from '../factories/AtributosFactory.js';
import { handleCarrousel } from '../handlers/carrouselHandler.js';
const router = express.Router();

// Registrar factories
CMSAbstractFactory.register('carrousel', new CarrouselFactory());
CMSAbstractFactory.register('banners', new BannersFactory());
CMSAbstractFactory.register('menu', new MenuFactory());
CMSAbstractFactory.register('atributos', new AtributosFactory());

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
    const data = await handler({ IdVista, IdMenu, Id });
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: 'Error ejecutando comando', detail: err.message });
  }
});

export default router;
