import { Router } from 'express';
import { GetAllCategoriesController } from '@modules/controllers/CategoriesController/GetAllCategories.controller';
import { StoreCategoriesController } from '@modules/controllers/CategoriesController/StoreCategories.controller';
import { CategoriesSchema } from '@modules/validators/CategoriesValidators/Categories.validators';
import ValidateBody from '@modules/middlewares/Validator.middleware';
import { ensuredAuthenticated } from '@modules/middlewares/Authenticated.middleware';

const categoriesRoutes = Router();
const getAllCategoriesController = new GetAllCategoriesController();
const storeCategoriesController = new StoreCategoriesController();

categoriesRoutes
    .get('/list',
         ensuredAuthenticated(),
         getAllCategoriesController.handle)

    .post(
        '/create',
        ensuredAuthenticated(),
        ValidateBody(CategoriesSchema),
        storeCategoriesController.handle,
    );

export { categoriesRoutes };
