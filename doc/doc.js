export const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'Delivery API',
    description: 'CRUD Delivery API',
    version: '1.0.0',
  },
  host: 'localhost:3005',
  tags: [
    {
      name: 'pedido',
      description: 'gerenciamento de pedidos',
    },
  ],
  paths: {
    '/pedido': {
      post: {
        tags: ['pedido'],
        summary: 'Criar pedido',
        description: 'Crie um novo pedido com os parâmetros recebidos',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para criar uma pedido',
            required: true,
            schema: {
              properties: {
                cliente: {
                  type: 'string',
                  example: 'Kenji Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 78.65,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                cliente: {
                  type: 'string',
                  example: 'Kenji Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 78.65,
                },
                entregue: {
                  type: 'boolean',
                  example: false,
                },
                timestamp: {
                  type: 'date',
                  example: '26/05/2023, 22:25:10',
                },
              },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
      put: {
        tags: ['pedido'],
        summary: 'Atualizar pedido existente',
        description: 'Atualize o pedido com os parâmetros recebidos',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para atualizar um pedido',
            required: true,
            schema: {
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                cliente: {
                  type: 'string',
                  example: 'Kenji Moura Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 80.85,
                },
                entregue: {
                  type: 'boolean',
                  example: false,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                cliente: {
                  type: 'string',
                  example: 'Kenji Moura Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 80.85,
                },
                entregue: {
                  type: 'boolean',
                  example: false,
                },
                timestamp: {
                  type: 'date',
                  example: '26/05/2023, 22:25:10',
                },
              },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido/entregue': {
      patch: {
        tags: ['pedido'],
        summary: 'Atualizar o status de entrega de um pedido existente',
        description:
          'Atualize o status de entrega do pedido com os parâmetros recebidos',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Devemos passar os seguintes parâmetros para atualizar o status de entrega do pedido',
            required: true,
            schema: {
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                entregue: {
                  type: 'boolean',
                  example: true,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                cliente: {
                  type: 'string',
                  example: 'Kenji Moura Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 80.85,
                },
                entregue: {
                  type: 'boolean',
                  example: true,
                },
                timestamp: {
                  type: 'date',
                  example: '26/05/2023, 22:25:10',
                },
              },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido/cancelar/{id}': {
      delete: {
        tags: ['pedido'],
        summary: 'Excluir pedido existente',
        description: 'Devemos passar o parâmetro ID para cancelar pedido',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Devemos passar o parâmetro ID para cancelar pedido',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              type: 'string',
              example: 'O pedido de ID 2 foi deletada',
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido/{id}': {
      get: {
        tags: ['pedido'],
        summary: 'Obter pedido existente',
        description: 'Obter descrição do pedido existente',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Devemos passar o parâmetro ID para obter pedido',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                cliente: {
                  type: 'string',
                  example: 'Kenji Moura Sakai',
                },
                produto: {
                  type: 'string',
                  example: 'Pizza de 4 Queijo',
                },
                valor: {
                  type: 'number',
                  example: 80.85,
                },
                entregue: {
                  type: 'boolean',
                  example: true,
                },
                timestamp: {
                  type: 'date',
                  example: '26/05/2023, 22:25:10',
                },
              },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido?cliente={cliente}': {
      get: {
        tags: ['pedido'],
        summary: 'Obter valor total de pedidos entregues de um cliente',
        description: 'Obter valor total de pedidos entregues de um cliente',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'cliente',
            description:
              'Devemos passar a seguinte consulta para obter valor total de pedidos entregues de um cliente',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              type: 'object',
              example: { total: 80.85 },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido?produto={produto}': {
      get: {
        tags: ['pedido'],
        summary: 'Obter valor total de pedidos entregues de um produto',
        description: 'Obter valor total de pedidos entregues de um produto',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'produto',
            description:
              'Devemos passar a seguinte consulta para obter valor total de pedidos entregues de um produto',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              type: 'object',
              example: { total: 80.85 },
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
    '/pedido/produtos/mais/vendidos': {
      get: {
        tags: ['pedido'],
        summary: 'Obter lista de produtos vendidos',
        description: 'Obter descrição da lista de produtos vendidos',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              type: 'object',
              example: [
                'Pizza Napolitana - 78',
                'Pizza Muçarela - 75',
                'Pizza a Moda - 67',
                'Pizza Frango com Catupiry - 66',
                'Pizza Atum - 64',
                'Pizza Calabresa - 59',
                'Pizza Pepperoni - 57',
                'abcde - 2',
                'Pizza - 2',
                'Pizza Grande GGG - 1',
                'teste - 1',
              ],
            },
          },
          400: {
            description: 'Error Occurred',
          },
        },
      },
    },
  },
  definitions: {
    Pedido: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        cliente: {
          type: 'string',
          example: 'Kenji Moura Sakai',
        },
        produto: {
          type: 'string',
          example: 'Pizza de 4 Queijo',
        },
        valor: {
          type: 'number',
          example: 80.85,
        },
        entregue: {
          type: 'boolean',
          example: true,
        },
        timestamp: {
          type: 'date',
          example: '26/05/2023, 22:25:10',
        },
      },
    },
  },
};
