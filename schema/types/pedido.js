import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
} from 'graphql';

const Pedido = new GraphQLObjectType({
  name: 'Pedido',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    cliente: {
      type: GraphQLString,
    },
    produto: {
      type: GraphQLString,
    },
    valor: {
      type: GraphQLFloat,
    },
    entregue: {
      type: GraphQLBoolean,
    },
    timestamp: {
      type: GraphQLString,
    },
  }),
});

export default Pedido;
