import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} from 'graphql';

const OrderType = new GraphQLObjectType({
    name: 'OrderType',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        client: {
            type: GraphQLString,
        },
        product: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLFloat,
        },
        status: {
            type: GraphQLString,
        },
        timestamp: {
            type: GraphQLString,
        },
    }),
});

export default OrderType;
