import logger from '../services/logging.service.js';
import orderService from '../services/order.service.js';

async function createOrder(req, res, next) {
    try {
        const order = req.body;
        const { client, product, value } = order;

        if (!client || !product || value == null) {
            throw new Error('O Cliente, Produto e Valor são obrigatórios.');
        }

        const response = await orderService.createOrder(order);

        logger.info(
            `[ORDER] POST ${req.originalUrl} - O pedido foi criado com sucesso.`,
        );

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getClientReport(req, res, next) {
    try {
        const { client } = req.query;

        if (!client) {
            throw new Error('O nome do cliente é obrigatório.');
        }

        const response = await orderService.getClientReport(client);

        logger.info(
            `[ORDER] GET ${req.originalUrl} - O relatório do cliente foi obtido com sucesso.`,
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getSalesReport(req, res, next) {
    try {
        const response = await orderService.getSalesReport();

        logger.info(
            `[ORDER] GET ${req.originalUrl} - O relatório de vendas foi obtido com sucesso.`,
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateOrder(req, res, next) {
    try {
        const order = req.body;
        const { id } = order;

        if (!id) {
            throw new Error('O ID do pedido é obrigatório.');
        }

        const response = await orderService.updateOrder(order);

        logger.info(
            `[ORDER] PATCH ${req.originalUrl} - O pedido foi atualizado com sucesso.`,
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createOrder,
    getClientReport,
    getSalesReport,
    updateOrder,
};
