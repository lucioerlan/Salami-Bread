import { Router } from 'express';
import { StoreProductsController } from 'src/app/controllers/ProductsController/StoreProducts.controller';
import { GetAllProductsController } from 'src/app/controllers/ProductsController/GetAllProducts.controller';
import { FindProductController } from 'src/app/controllers/ProductsController/FindProduct.controller';
import { ProductsSchema } from 'src/app/validators/ProductsValidators/Products.validators';
import ValidateBody from 'src/app/middlewares/Validator.middleware';
import EnsuredAuthenticated from 'src/app/middlewares/Authenticated.middleware';

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
