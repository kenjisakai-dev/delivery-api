import express from 'express';
import logger from '../services/logging.service.js';
import orderService from '../controllers/order.controller.js';

const router = express.Router();

router.post('/create', orderService.createOrder);
router.get('/clientReport', orderService.getClientReport);
router.get('/salesReport', orderService.getSalesReport);
router.patch('/update', orderService.updateOrder);

router.use((err, req, res, next) => {
    const route = req.baseUrl.slice(8)?.toUpperCase();

    logger.error(
        `[${route}] ${req.method} ${req.originalUrl} - ${err.message}`,
    );
    res.status(400).send({ erro: err.message });
});

export default router;
