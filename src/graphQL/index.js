import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import OrderQueries from './queries/order.query.js';
import OrderMutation from './mutations/order.mutations.js';

const Schema = new GraphQLSchema({
    types: null,

    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            ...OrderQueries,
        },
    }),

    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: {
            ...OrderMutation,
        },
    }),
});

export default Schema;
