import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc/doc.js';
import { graphqlHTTP } from 'express-graphql';
import Schema from './src/graphQL/index.js';
import orderRoute from './src/routes/order.route.js';

const app = express();
app.use(express.json());

app.use('/api/v1/order', orderRoute);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    '/graphQL',
    graphqlHTTP({
        schema: Schema,
        graphiql: true,
    }),
);

app.listen(3000, () => console.log('API Started!'));
