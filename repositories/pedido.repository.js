import { promises as fs } from 'fs';
const { writeFile, readFile } = fs;

async function insertPedido(pedido) {
  const data = JSON.parse(await readFile('pedidos.json'));

  const pedidoObj = {
    id: data.nextId,
    cliente: pedido.cliente,
    produto: pedido.produto,
    valor: pedido.valor,
    entregue: false,
    timestamp: new Date().toLocaleString(),
  };

  data.pedidos.push(pedidoObj);
  data.nextId++;

  await writeFile('pedidos.json', JSON.stringify(data, null, 2));

  return pedidoObj;
}

async function updatePedido(pedido) {
  const data = JSON.parse(await readFile('pedidos.json'));

  const index = data.pedidos.findIndex((p) => p.id === parseInt(pedido.id));

  const pedidoFinded = data.pedidos[index];

  pedidoFinded.cliente = pedido.cliente;
  pedidoFinded.produto = pedido.produto;
  pedidoFinded.valor = pedido.valor;
  pedidoFinded.entregue = pedido.entregue;

  await writeFile('pedidos.json', JSON.stringify(data, null, 2));

  return data.pedidos[index];
}

async function updateEntregue(pedido) {
  const data = JSON.parse(await readFile('pedidos.json'));

  const index = data.pedidos.findIndex((p) => p.id === parseInt(pedido.id));

  data.pedidos[index].entregue = pedido.entregue;

  await writeFile('pedidos.json', JSON.stringify(data, null, 2));

  return data.pedidos[index];
}

async function deletePedido(id) {
  const data = JSON.parse(await readFile('pedidos.json'));

  data.pedidos = data.pedidos.filter((p) => p.id !== parseInt(id));

  await writeFile('pedidos.json', JSON.stringify(data, null, 2));
}

async function getPedido(id) {
  const data = JSON.parse(await readFile('pedidos.json'));

  const pedido = data.pedidos.find((p) => p.id === parseInt(id));

  return pedido;
}

async function getConsultaValorTotal(cliente, produto) {
  const data = JSON.parse(await readFile('pedidos.json'));

  if (cliente) {
    const pedido = data.pedidos.find((p) => p.cliente === cliente);

    if (pedido === undefined) return false;

    const total = data.pedidos.reduce((acc, p) => {
      if (p.cliente === cliente && p.entregue === true) return acc + p.valor;
      return acc;
    }, 0);
    return total;
  }

  if (produto) {
    const pedido = data.pedidos.find((p) => p.produto === produto);

    if (pedido === undefined) return false;

    const total = data.pedidos.reduce((acc, p) => {
      if (p.produto === produto && p.entregue === true) return acc + p.valor;
      return acc;
    }, 0);
    return total;
  }
}

async function getProdutosMaisVendidos() {
  const data = JSON.parse(await readFile('pedidos.json'));

  const produtosVendidos = data.pedidos
    .filter((p) => {
      if (p.entregue === true) return p;
    })
    .map((p) => p.produto);

  const produtos = [...new Set(produtosVendidos)];

  let list = [];

  produtos.forEach((p) => {
    list.push({ produto: p, vendidos: 0 });
  });

  produtosVendidos.forEach((p) => {
    list.forEach((e) => {
      if (e.produto === p) {
        e.vendidos++;
      }
    });
  });

  list.sort((a, b) => a.produto.localeCompare(b.produto));
  list.sort((a, b) => b.vendidos - a.vendidos);
  list = list.map((p) => {
    return `${p.produto} - ${p.vendidos}`;
  });

  return list;
}

export default {
  insertPedido,
  updatePedido,
  updateEntregue,
  deletePedido,
  getPedido,
  getConsultaValorTotal,
  getProdutosMaisVendidos,
};
