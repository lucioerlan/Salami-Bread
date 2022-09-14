import { Router } from 'express';
import swaggerRoutes from '../../docs/swagger-config';
import { userRoutes } from './user.routes';

const routes = Router();

routes
    .use('/docs', swaggerRoutes)
    .use('/users', userRoutes);

export { routes };
