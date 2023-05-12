import { GraphQLList, GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';
import Pedido from '../types/pedido.js';
import PedidoService from '../../services/pedido.service.js';

const PedidoQueries = {
  getPedido: {
    type: Pedido,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt,
      },
    },
    resolve: (_, args) => PedidoService.getPedido(args.id),
  },
  getProdutosMaisVendidos: {
    type: new GraphQLList(GraphQLString),
    resolve: () => PedidoService.getProdutosMaisVendidos(),
  },
  getConsultaValorTotal: {
    type: GraphQLFloat,
    args: {
      cliente: {
        name: 'cliente',
        type: GraphQLString,
      },
      produto: {
        name: 'produto',
        type: GraphQLString,
      },
    },
    resolve: (_, args) =>
      PedidoService.getConsultaValorTotal(args.cliente, args.produto),
  },
};

export default PedidoQueries;
