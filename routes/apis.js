import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const TOKEN = process.env.CMS_TOKEN; 
console.log('Token CMS:', process.env.CMS_TOKEN);
const headers = {
  'Authorization': `${TOKEN}`,
  'Content-Type': 'application/json'
};

// CARRUSEL
router.get('/carrousel', async (req, res) => {
  try {
    const idVista = req.query.IdVista || 4;
    const url = `https://appcms.desarrollo.dnscheck.com.ar/ContentSettings/GetCarruselConfig?IdVista=${idVista}`;
    const response = await fetch(url, {
      method: 'POST',
      headers
    });
    console.log('STATUS:', response.status);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el carrusel', detail: err.message });
  }
});


// BANNERS
router.get('/banners', async (req, res) => {
    try {
        // Permitir pasar IdVista como query param, default a 15 si no se envía
        const idVista = req.query.IdVista || 15;
        const url = `https://appcms.desarrollo.dnscheck.com.ar/ContentSettings/GetBannersVista?IdVista=${idVista}`;
        const response = await fetch(url, { headers });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los banners', detail: err.message });
    }
});

// MENU
router.get('/menu', async (req, res) => {
    try {
        // Permitir pasar IdVista e IdMenu como query params, default a 15 y 4 si no se envían
        const idVista = req.query.IdVista || 15;
        const idMenu = req.query.IdMenu || 4;
        const url = `https://appcms.desarrollo.dnscheck.com.ar/ContentSettings/ContentSettings/GetMenu/IdVista/${idVista}/IdMenu/${idMenu}`;
        const response = await fetch(url, { headers });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el menú', detail: err.message });
    }
});

// ATRIBUTOS
router.post('/atributos', async (req, res) => {
    try {
        // Permitir pasar IdVista e Id por query o body, con defaults
        const idVista = req.query.IdVista || req.body.IdVista || 15;
        const id = req.query.Id || req.body.Id || 4;

        const url = `https://appcms.desarrollo.dnscheck.com.ar/ContentSettings/GetAtributosCMS?IdVista=${idVista}&Id=${id}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(req.body) // opcionalmente podrías limpiar el body si contiene IdVista o Id
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error del servidor remoto', data });
        }

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los atributos', detail: err.message });
    }
});

export default router;
