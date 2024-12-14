import { GraphQLString } from 'graphql';
import { ClientReportType, SalesReportType } from '../types/reportType.js';
import orderService from '../../services/order.service.js';

const OrderQueries = {
    clientReport: {
        type: ClientReportType,
        args: {
            client: {
                name: 'client',
                type: GraphQLString,
            },
        },
        resolve: async (_, args) =>
            await orderService.getClientReport(args.client),
    },
    salesReport: {
        type: SalesReportType,
        resolve: async () => await orderService.getSalesReport(),
    },
};

export default OrderQueries;
