import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import PedidoQuery from './queries/pedido.query.js';
import PedidoMutation from './mutations/pedido.mutations.js';

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...PedidoQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      ...PedidoMutation,
    },
  }),
});

export default Schema;
