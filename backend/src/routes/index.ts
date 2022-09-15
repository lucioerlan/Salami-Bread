import { Router } from 'express';
import swaggerRoutes from '../../docs/swagger-config';
import { userRoutes } from './user.routes';
import { categoriesRoutes } from './categories.routes';

const routes = Router();

routes
    .use('/docs', swaggerRoutes)
    .use('/users', userRoutes)
    .use('/categories', categoriesRoutes);

export { routes };
