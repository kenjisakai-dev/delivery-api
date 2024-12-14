import { CreateOrderInput, UpdateOrderInput } from '../types/orderInput.js';
import OrderType from '../types/orderType.js';
import orderService from '../../services/order.service.js';

const OrderMutation = {
    createOrder: {
        type: OrderType,
        args: {
            order: {
                type: CreateOrderInput,
            },
        },
        resolve: async (_, { order }) => await orderService.createOrder(order),
    },

    updateOrder: {
        type: OrderType,
        args: {
            order: {
                type: UpdateOrderInput,
            },
        },
        resolve: async (_, { order }) => await orderService.updateOrder(order),
    },
};

export default OrderMutation;
