import orderRepository from '../repositories/order.repository.js';

async function createOrder(order) {
    const data = await orderRepository.readerOrderFile();

    const orderObject = {
        id: data.nextId++,
        client: order.client,
        product: order.product,
        value: order.value,
        status: data.status.pendente[0],
        timestamp: new Date(),
    };

    data.orders.push(orderObject);

    await orderRepository.writerOrderFile(data);

    return orderObject;
}

async function getClientReport(client) {
    const data = await orderRepository.readerOrderFile();

    const historico = data.orders.filter(
        (x) => x.client?.toUpperCase() === client?.toUpperCase(),
    );

    if (historico.length === 0) {
        throw new Error('O cliente não foi encontrado.');
    }

    const { status } = data;

    const total_vendido = getOrderTotals(historico, status.entregue);
    const total_cancelado = getOrderTotals(historico, status.cancelado);
    const total_pendente = getOrderTotals(historico, status.pendente);
    const total = getOrderTotals(historico, status.todos);
    const produtos = getProductReport(historico);

    return {
        client: historico[0].client,
        total_vendido,
        total_cancelado,
        total_pendente,
        total,
        produtos,
    };
}

async function getSalesReport() {
    const data = await orderRepository.readerOrderFile();

    if (data.orders.length === 0) {
        throw new Error('Não existe pedidos cadastrados.');
    }

    const { orders, status } = data;

    const total_vendido = getOrderTotals(orders, status.entregue);
    const total_cancelado = getOrderTotals(orders, status.cancelado);
    const total_pendente = getOrderTotals(orders, status.pendente);
    const total = getOrderTotals(orders, status.todos);
    const produtos = getProductReport(orders);

    return {
        total_vendido,
        total_cancelado,
        total_pendente,
        total,
        produtos,
    };
}

function getProductReport(data) {
    const products = {};

    data.forEach((x) => {
        let item = products[x.product];

        if (item) {
            item.quantidade += 1;
            item.total += parseFloat(x.value);
        } else {
            products[x.product] = {
                quantidade: 1,
                total: parseFloat(x.value),
            };
        }
    });

    return Object.entries(products)
        .map(([produto, { quantidade, total }]) => {
            return { produto, quantidade, total };
        })
        .sort((a, b) => b.total - a.total)
        .map(({ produto, quantidade, total }) => {
            return { produto, quantidade, total: formatValue(total) };
        });
}

function getOrderTotals(historico, status) {
    const total = historico.reduce((accumulator, item) => {
        if (status.includes(item.status)) {
            return accumulator + parseFloat(item.value);
        } else {
            return accumulator;
        }
    }, 0);

    return formatValue(total);
}

function formatValue(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

async function updateOrder(order) {
    const data = await orderRepository.readerOrderFile();

    const orderIndex = data.orders.findIndex(
        (x) => x.id === parseInt(order.id),
    );

    if (orderIndex === -1) {
        throw new Error('O pedido não foi encontrado.');
    }

    const { product, value, status } = order;
    const AllStatus = data.status.todos;

    const _order = data.orders[orderIndex];

    if (product) _order.product = product;
    if (value) _order.value = value;
    if (status && AllStatus.includes(status.toUpperCase())) {
        _order.status = status.toUpperCase();
    }

    await orderRepository.writerOrderFile(data);

    return _order;
}

export default {
    createOrder,
    getClientReport,
    getSalesReport,
    updateOrder,
};
