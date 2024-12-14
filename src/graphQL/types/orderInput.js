import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull,
} from 'graphql';

export const CreateOrderInput = new GraphQLInputObjectType({
    name: 'CreateOrderInput',
    fields: () => ({
        client: {
            type: new GraphQLNonNull(GraphQLString),
        },
        product: {
            type: new GraphQLNonNull(GraphQLString),
        },
        value: {
            type: new GraphQLNonNull(GraphQLFloat),
        },
    }),
});

export const UpdateOrderInput = new GraphQLInputObjectType({
    name: 'UpdateOrderInput',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt),
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
    }),
});
