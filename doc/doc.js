export const swaggerDocument = {
    swagger: '2.0',
    info: {
        title: 'Delivery API',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    tags: [
        {
            name: 'order',
            description: 'Gerenciamento dos Pedidos',
        },
    ],
    paths: {
        '/order/create': {
            post: {
                tags: ['order'],
                description: 'Endpoint responsável por cadastrar um pedido',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: {
                            properties: {
                                client: {
                                    type: 'string',
                                    example: 'Lavínia Dâmaso',
                                },
                                product: {
                                    type: 'string',
                                    example: 'Pizza Muçarela',
                                },
                                value: {
                                    type: 'number',
                                    example: 26,
                                },
                            },
                        },
                    },
                ],
                responses: {
                    201: {
                        description: 'Created',
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                client: {
                                    type: 'string',
                                    example: 'Lavínia Dâmaso',
                                },
                                product: {
                                    type: 'string',
                                    example: 'Pizza Muçarela',
                                },
                                value: {
                                    type: 'number',
                                    example: 26,
                                },
                                status: {
                                    type: 'string',
                                    example: 'PENDENTE',
                                },
                                timestamp: {
                                    type: 'date',
                                    example: '2021-05-02T19:48:09.765Z',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/order/clientReport?client={client}': {
            get: {
                tags: ['order'],
                description:
                    'Endpoint responsável por obter informações do proprietário',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'path',
                        name: 'client',
                        description: 'Cliente utilizado para gerar relatório',
                        required: true,
                        schema: {
                            type: 'string',
                            example: 'Lavínia Dâmaso',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                client: {
                                    type: 'string',
                                    example: 'Lavínia Dâmaso',
                                },
                                total_vendido: {
                                    type: 'string',
                                    example: 'R$ 113,00',
                                },
                                total_cancelado: {
                                    type: 'string',
                                    example: 'R$ 93,50',
                                },
                                total_pendente: {
                                    type: 'string',
                                    example: 'R$ 59,00',
                                },
                                total: {
                                    type: 'string',
                                    example: 'R$ 265,50',
                                },
                                produtos: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            produto: {
                                                type: 'string',
                                                example: 'Pizza Napolitana',
                                            },
                                            quantidade: {
                                                type: 'integer',
                                                example: 3,
                                            },
                                            total: {
                                                type: 'string',
                                                example: 'R$ 84,00',
                                            },
                                        },
                                    },
                                    example: [
                                        {
                                            produto: 'Pizza Napolitana',
                                            quantidade: 3,
                                            total: 'R$ 84,00',
                                        },
                                        {
                                            produto: 'Pizza a Moda',
                                            quantidade: 2,
                                            total: 'R$ 62,00',
                                        },
                                        {
                                            produto: 'Pizza Calabresa',
                                            quantidade: 2,
                                            total: 'R$ 61,00',
                                        },
                                        {
                                            produto: 'Pizza Pepperoni',
                                            quantidade: 1,
                                            total: 'R$ 32,50',
                                        },
                                        {
                                            produto: 'Pizza Muçarela',
                                            quantidade: 1,
                                            total: 'R$ 26,00',
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/order/salesReport': {
            get: {
                tags: ['order'],
                description:
                    'Endpoint responsável por gerar o relatório de vendas do restaurante',
                produces: ['application/json'],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                client: {
                                    type: 'string',
                                    example: 'Cliente Exemplo',
                                },
                                total_vendido: {
                                    type: 'string',
                                    example: 'R$ 4.547,50',
                                },
                                total_cancelado: {
                                    type: 'string',
                                    example: 'R$ 5.336,50',
                                },
                                total_pendente: {
                                    type: 'string',
                                    example: 'R$ 4.959,00',
                                },
                                total: {
                                    type: 'string',
                                    example: 'R$ 14.843,00',
                                },
                                produtos: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            produto: {
                                                type: 'string',
                                                example: 'Pizza Napolitana',
                                            },
                                            quantidade: {
                                                type: 'integer',
                                                example: 83,
                                            },
                                            total: {
                                                type: 'string',
                                                example: 'R$ 2.324,00',
                                            },
                                        },
                                    },
                                    example: [
                                        {
                                            produto: 'Pizza Napolitana',
                                            quantidade: 83,
                                            total: 'R$ 2.324,00',
                                        },
                                        {
                                            produto: 'Pizza a Moda',
                                            quantidade: 72,
                                            total: 'R$ 2.232,00',
                                        },
                                        {
                                            produto: 'Pizza Atum',
                                            quantidade: 68,
                                            total: 'R$ 2.176,00',
                                        },
                                        {
                                            produto: 'Pizza Muçarela',
                                            quantidade: 80,
                                            total: 'R$ 2.080,00',
                                        },
                                        {
                                            produto: 'Pizza Pepperoni',
                                            quantidade: 63,
                                            total: 'R$ 2.047,50',
                                        },
                                        {
                                            produto:
                                                'Pizza Frango com Catupiry',
                                            quantidade: 69,
                                            total: 'R$ 2.001,00',
                                        },
                                        {
                                            produto: 'Pizza Calabresa',
                                            quantidade: 65,
                                            total: 'R$ 1.982,50',
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/order/update': {
            patch: {
                tags: ['order'],
                description: 'Endpoint responsável por atualizar o pedido',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        required: true,
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                product: {
                                    type: 'string',
                                    example: 'Pizza Muçarela',
                                },
                                value: {
                                    type: 'number',
                                    example: 26,
                                },
                                status: {
                                    type: 'string',
                                    example: 'ENTREGUE',
                                },
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                client: {
                                    type: 'string',
                                    example: 'Lavínia Dâmaso',
                                },
                                product: {
                                    type: 'string',
                                    example: 'Pizza Muçarela',
                                },
                                value: {
                                    type: 'number',
                                    example: 26,
                                },
                                status: {
                                    type: 'string',
                                    example: 'ENTREGUE',
                                },
                                timestamp: {
                                    type: 'date',
                                    example: '2021-05-02T19:48:09.765Z',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
    },
    definitions: {
        order: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 1,
                },
                client: {
                    type: 'string',
                    example: 'Lavínia Dâmaso',
                },
                product: {
                    type: 'string',
                    example: 'Pizza Muçarela',
                },
                value: {
                    type: 'number',
                    example: 26,
                },
                status: {
                    type: 'string',
                    example: 'ENTREGUE',
                },
                timestamp: {
                    type: 'date',
                    example: '2021-05-02T19:48:09.765Z',
                },
            },
        },
    },
};
