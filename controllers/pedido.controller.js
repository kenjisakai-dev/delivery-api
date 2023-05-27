import PedidoService from '../services/pedido.service.js';

async function createPedido(req, res, next) {
  try {
    let pedido = req.body;
    const { cliente, produto, valor } = pedido;

    if (!cliente || !produto || valor == null) {
      throw new Error(`Cliente, Produto e Valor são obrigatórios.`);
    }

    pedido = await PedidoService.createPedido(pedido);

    res.send(pedido);
    global.logger.info(`POST /pedido - ${JSON.stringify(pedido)}`);
  } catch (err) {
    next(err);
  }
}

async function updatePedido(req, res, next) {
  try {
    let pedido = req.body;
    const { id, cliente, produto, valor, entregue } = pedido;

    if (!id || !cliente || !produto || valor == null || entregue == null) {
      throw new Error(
        `O ID do pedido, Cliente, Produto, Valor e Entregue são obrigatórios.`
      );
    }

    pedido = await PedidoService.updatePedido(pedido);

    res.send(pedido);
    global.logger.info(`PUT /pedido - ${JSON.stringify(pedido)}`);
  } catch (err) {
    next(err);
  }
}

async function updateEntregue(req, res, next) {
  try {
    let pedido = req.body;
    const { id, entregue } = pedido;

    if (!id || entregue == null) {
      throw new Error(`O ID do Pedido e Entregue são obrigatórios.`);
    }

    pedido = await PedidoService.updateEntregue(pedido);

    res.send(pedido);
    global.logger.info(`PATCH /pedido/entregue - ${JSON.stringify(pedido)}`);
  } catch (err) {
    next(err);
  }
}

async function deletePedido(req, res, next) {
  try {
    await PedidoService.deletePedido(req.params.id);

    res.send(`O Produto de ID ${req.params.id} foi deletado.`);
    global.logger.info(`DELETE /pedido/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function getPedido(req, res, next) {
  try {
    res.send(await PedidoService.getPedido(req.params.id));
    global.logger.info(`GET /pedido/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function getConsultaValorTotal(req, res, next) {
  try {
    const total = await PedidoService.getConsultaValorTotal(
      req.query.cliente,
      req.query.produto
    );

    const chave = req.query.cliente ? 'cliente' : 'produto';
    const consulta = req.query.cliente ? req.query.cliente : req.query.produto;

    res.send({ total: `R$: ${total.toFixed(2)}` });
    global.logger.info(`GET /pedido?${chave}=${consulta}`);
  } catch (err) {
    next(err);
  }
}

async function getProdutosMaisVendidos(req, res, next) {
  try {
    res.send(await PedidoService.getProdutosMaisVendidos());
    global.logger.info(`GET /produtos/mais/vendidos`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPedido,
  updatePedido,
  updateEntregue,
  deletePedido,
  getPedido,
  getConsultaValorTotal,
  getProdutosMaisVendidos,
};
