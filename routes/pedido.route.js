import express from 'express';
import PedidoController from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', PedidoController.createPedido);
router.put('/', PedidoController.updatePedido);
router.patch('/entregue', PedidoController.updateEntregue);
router.delete('/cancelar/:id', PedidoController.deletePedido);
router.get('/:id', PedidoController.getPedido);
router.get('/', PedidoController.getConsultaValorTotal);
router.get('/produtos/mais/vendidos', PedidoController.getProdutosMaisVendidos);

router.use((err, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ erro: err.message });
});

export default router;
