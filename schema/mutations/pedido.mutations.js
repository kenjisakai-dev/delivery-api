import Pedido from '../types/pedido.js';
import {
  CreatePedidoInput,
  UpdatePedidoInput,
  UpdateEntregueInput,
} from '../types/pedidoInput.js';
import PedidoService from '../../services/pedido.service.js';
import { GraphQLBoolean, GraphQLInt } from 'graphql';

const pedidoMutation = {
  createPedido: {
    type: Pedido,
    args: {
      pedido: {
        name: 'pedido',
        type: CreatePedidoInput,
      },
    },
    resolve: (_, args) => {
      return PedidoService.createPedido(args.pedido);
    },
  },
  updatePedido: {
    type: Pedido,
    args: {
      pedido: {
        name: 'pedido',
        type: UpdatePedidoInput,
      },
    },
    resolve: (_, args) => {
      return PedidoService.updatePedido(args.pedido);
    },
  },
  updateEntregue: {
    type: Pedido,
    args: {
      pedido: {
        name: 'pedido',
        type: UpdateEntregueInput,
      },
    },
    resolve: (_, args) => {
      return PedidoService.updateEntregue(args.pedido);
    },
  },
  deletePedido: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt,
      },
    },
    resolve: (_, args) => {
      return PedidoService.deletePedido(args.id);
    },
  },
};

export default pedidoMutation;
