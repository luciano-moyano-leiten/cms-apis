import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { API_ENDPOINTS_CONTTENTSETTINGS } from '../config/apiConfig.js';

dotenv.config();

const router = express.Router();

/* router.all('/health', (req, res) => {

    const idVista = req.query.idVista;
    const idMenu = req.query.idMenu;


    res.json({
        status: 'ok',
        idVista,
        idMenu
    });
});
 */

const TOKEN = process.env.CMS_TOKEN;
const headers = {
    'Authorization': `${TOKEN}`,
    'Content-Type': 'application/json'
};

router.all('/', async (req, res) => {
    const {type, IdVista, IdMenu, Id} = req.method === 'GET' ? req.query : req.body;
console.log(`[INICIO] type: ${type}, IdVista: ${IdVista}, IdMenu: ${IdMenu}, Id: ${Id}`);

   try {
        if (type === 'carrousel') {
            const vista = IdVista || 4;
            const url = `${API_ENDPOINTS_CONTTENTSETTINGS.CARRUSEL}?IdVista=${vista}`;

            const response = await fetch(url, {
                method: 'POST',
                headers
            });
            console.log(response, "response")
            const data = await response.json();
            return res.json(data);

        } else if (type === 'banners') {
            const vista = IdVista || 15;
            const url = `${API_ENDPOINTS_CONTTENTSETTINGS.BANNERS}?IdVista=${vista}`;
            const response = await fetch(url, { headers });

            const data = await response.json();
            return res.json(data);

        } else if (type === 'menu') {
            const vista = IdVista || 15;
            const menu = IdMenu || 4;
            const url = `${API_ENDPOINTS_CONTTENTSETTINGS.MENU}/IdVista/${vista}/IdMenu/${menu}`;
            const response = await fetch(url, { headers });

            const data = await response.json();
            return res.json(data);

        } else if (type === 'atributos') {
            const vista = IdVista || 15;
            const id = Id || 4;
            const url = `${API_ENDPOINTS_CONTTENTSETTINGS.ATRIBUTOS}?IdVista=${vista}&Id=${id}`;
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(req.body || {})
            });

            const data = await response.json();
            return res.json(data);

        } else {
            return res.status(400).json({ error: 'Comando no reconocido', type });
        }

    } catch (err) {
        return res.status(500).json({ error: 'Error al ejecutar el comando', detail: err.message });
    }
});

export default router;
