import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export const ClientReportType = new GraphQLObjectType({
    name: 'ClientReportType',
    fields: () => ({
        client: {
            type: GraphQLString,
        },
        total_vendido: {
            type: GraphQLString,
        },
        total_cancelado: {
            type: GraphQLString,
        },
        total_pendente: {
            type: GraphQLString,
        },
        total: {
            type: GraphQLString,
        },
        produtos: {
            type: new GraphQLList(ProductType),
        },
    }),
});

export const SalesReportType = new GraphQLObjectType({
    name: 'SalesReportType',
    fields: () => ({
        total_vendido: {
            type: GraphQLString,
        },
        total_cancelado: {
            type: GraphQLString,
        },
        total_pendente: {
            type: GraphQLString,
        },
        total: {
            type: GraphQLString,
        },
        produtos: {
            type: new GraphQLList(ProductType),
        },
    }),
});

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        produto: {
            type: GraphQLString,
        },
        quantidade: {
            type: GraphQLInt,
        },
        total: {
            type: GraphQLString,
        },
    }),
});
