import express from "express";
const router = express.Router();

import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

// 1. cadastrar pedido - ok
router.post("/cadastrarPedidos", async (req, res) => {
  try {
    let pedidos = req.body;
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));

    pedidos = {
      id: listaPedidos.nextId++,
      ...pedidos,
      timestamp: new Date(),
    };
    listaPedidos.pedidos.push(pedidos);

    await writeFile("pedidos.json", JSON.stringify(listaPedidos, null, 2));

    res.send(pedidos);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 2. atualizar pedido - ok
router.get("/atualizarPedidos/:id", async (req, res) => {
  try {
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));
    const { cliente, produto, valor, entregue } = req.body;
    const id = parseInt(req.params.id);

    if (id > listaPedidos.pedidos.length) {
      res.send({ erro: "Pedido não existe" });
      return;
    }

    listaPedidos.pedidos.find((pedido) => {
      if (pedido.id === id) {
        pedido.cliente = cliente;
        pedido.produto = produto;
        pedido.valor = valor;
        pedido.entregue = entregue;
        res.send(pedido);
      }
    });
    writeFile("pedidos.json", JSON.stringify(listaPedidos, null, 2));
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 3. atualizar o status da entregue
router.get("/atualizarEntregue/:id", async (req, res) => {
  try {
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));
    const { entregue } = req.body;
    const id = parseInt(req.params.id);

    listaPedidos.pedidos.find((pedido) => {
      if (pedido.id === id) {
        pedido.entregue = entregue;
        res.send(pedido);
      }
    });
    writeFile("pedidos.json", JSON.stringify(listaPedidos, null, 2));
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 4. excluir um pedido - ok
router.delete("/excluirPedidos/:id", async (req, res) => {
  try {
    const arquivo = JSON.parse(await readFile("pedidos.json"));

    arquivo.pedidos = arquivo.pedidos.filter(
      (pedido) => pedido.id !== parseInt(req.params.id)
    );

    await writeFile("pedidos.json", JSON.stringify(arquivo, null, 2));

    res.send(arquivo);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 5. consultar um pedido especifico - ok
router.get("/consultarPedidos/:id", async (req, res) => {
  try {
    const arquivo = JSON.parse(await readFile("pedidos.json"));
    const id = parseInt(req.params.id);

    arquivo.pedidos.find((pedido) => {
      if (pedido.id === id) res.send(pedido);
    });
  } catch (error) {
    res.status(400).send({ erro: error, message });
  }
});

// 6. consultar valor total cliente - ok
router.get("/valorTotalClientes/:cliente", async (req, res) => {
  try {
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));
    const cliente = req.params.cliente;
    let total = 0;

    listaPedidos.pedidos.forEach((pedido) => {
      if (pedido.cliente === cliente && pedido.entregue === true) {
        total += pedido.valor;
      }
    });
    res.send({ cliente: cliente, total: total });
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 7. consultar valor total produto - ok
router.get("/valorTotalProduto/:produto", async (req, res) => {
  try {
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));
    const produto = req.params.produto;
    let total = 0;

    listaPedidos.pedidos.forEach((pedido) => {
      if (pedido.produto === produto && pedido.entregue === true) {
        total += pedido.valor;
      }
    });
    res.send({ produto: produto, total: total });
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

// 8. produtos mais vendidos
router.get("/produtosMaisVendidos", async (_, res) => {
  try {
    const listaPedidos = JSON.parse(await readFile("pedidos.json"));

    // pega todos os pedidos
    const produtos = [];
    listaPedidos.pedidos.forEach((pedido) => {
      if (pedido.entregue === true) {
        produtos.push(pedido.produto);
      }
    });

    // pega todos os pedidos e tira as duplicatas
    const qntProdutos = [];
    const setArray = new Set(produtos);
    const result = [...setArray.values()];
    result.forEach((pedido) => {
      qntProdutos.push({ qnt: 0, produto: pedido });
    });

    // somar as quantidades de cada produto
    produtos.forEach((pedido) => {
      qntProdutos.forEach((pedidoQnt) => {
        if (pedido === pedidoQnt.produto) {
          pedidoQnt.qnt++;
        }
      });
    });

    // ordenando por qnt e por ordem alfabetica
    qntProdutos.sort((a, b) => {
      if (a.qnt > b.qnt) {
        return -1;
      }
      if (a.qnt < b.qnt) {
        return 1;
      }
      if (a.produto < b.produto) {
        return -1;
      }
    });
    const valores = qntProdutos.slice(0, 3);

    const arrayFinal = [];
    valores.forEach((pedido) => {
      arrayFinal.push(`${pedido.produto} - ${pedido.qnt}`);
    });
    res.send(arrayFinal);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

export default router;
