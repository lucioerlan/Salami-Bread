import { Router } from 'express';
import swaggerRoutes from '../docs/swagger-config';

const routes = Router();

routes.use('/docs', swaggerRoutes);

export { routes };
