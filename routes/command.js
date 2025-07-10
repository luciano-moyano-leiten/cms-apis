import express from 'express';
const router = express.Router();

router.all('/health', (req, res) => {
    const idVista = req.query.idVista;
    const idMenu = req.query.idMenu;
    res.json({
        status: 'ok',
        idVista,
        idMenu
    });
});

export default router;
