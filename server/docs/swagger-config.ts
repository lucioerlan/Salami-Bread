import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const router = express.Router();

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
