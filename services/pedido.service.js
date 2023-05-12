import PedidoRepository from '../repositories/pedido.repository.js';

async function createPedido(pedido) {
  return await PedidoRepository.insertPedido(pedido);
}

async function updatePedido(pedido) {
  await getPedido(pedido.id);
  return await PedidoRepository.updatePedido(pedido);
}

async function updateEntregue(pedido) {
  await getPedido(pedido.id);
  return await PedidoRepository.updateEntregue(pedido);
}

async function deletePedido(id) {
  await getPedido(id);
  await PedidoRepository.deletePedido(id);
}

async function getPedido(id) {
  const pedido = await PedidoRepository.getPedido(id);
  if (!pedido) throw new Error('O ID do Pedido Informado não existe.');
  return pedido;
}

async function getConsultaValorTotal(cliente, produto) {
  const consulta = await PedidoRepository.getConsultaValorTotal(
    cliente,
    produto
  );
  if (cliente && consulta === false)
    throw new Error('O Cliente informado não existe.');
  if (produto && consulta === false)
    throw new Error('O Produto informado não existe.');

  return consulta;
}

async function getProdutosMaisVendidos() {
  return await PedidoRepository.getProdutosMaisVendidos();
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
