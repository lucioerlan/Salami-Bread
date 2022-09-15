import { Router } from 'express';
import { StoreProductsController } from '@modules/controllers/ProductsController/StoreProducts.controller';
import { GetAllProductsController } from '@modules/controllers/ProductsController/GetAllProducts.controller';
import { FindProductController } from '@modules/controllers/ProductsController/FindProduct.controller';
import { ProductsSchema } from '@modules/validators/ProductsValidators/Products.validators';
import ValidateBody from '@modules/middlewares/Validator.middleware';
import EnsuredAuthenticated from '@modules/middlewares/Authenticated.middleware';

const productsRoutes = Router();
const storeProductsController = new StoreProductsController();
const getAllProductsController = new GetAllProductsController();
const findProductController = new FindProductController();

productsRoutes
    .post(
        '/create',
        EnsuredAuthenticated,
        ValidateBody(ProductsSchema),
        storeProductsController.handle,
    )
    .get(
        '/list',
        getAllProductsController.handle,
    )
    .get(
        '/list/:id',
        findProductController.handle,
    )


export { productsRoutes };
