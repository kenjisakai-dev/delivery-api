import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';

export const CreatePedidoInput = new GraphQLInputObjectType({
  name: 'CreatePedidoInput',
  fields: () => ({
    cliente: {
      type: new GraphQLNonNull(GraphQLString),
    },
    produto: {
      type: new GraphQLNonNull(GraphQLString),
    },
    valor: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  }),
});

export const UpdatePedidoInput = new GraphQLInputObjectType({
  name: 'UpdatePedidoInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    cliente: {
      type: new GraphQLNonNull(GraphQLString),
    },
    produto: {
      type: new GraphQLNonNull(GraphQLString),
    },
    valor: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    entregue: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  }),
});

export const UpdateEntregueInput = new GraphQLInputObjectType({
  name: 'UpdateEntregueInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    entregue: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  }),
});
