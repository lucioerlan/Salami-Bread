import { Router } from 'express';
import { GetAllCategoriesController } from 'src/app/controllers/CategoriesController/GetAllCategories.controller';
import { StoreCategoriesController } from 'src/app/controllers/CategoriesController/StoreCategories.controller';
import { CategoriesSchema } from 'src/app/validators/CategoriesValidators/Categories.validators';
import ValidateBody from 'src/app/middlewares/Validator.middleware';
import EnsuredAuthenticated from 'src/app/middlewares/Authenticated.middleware';

const categoriesRoutes = Router();
const getAllCategoriesController = new GetAllCategoriesController();
const storeCategoriesController = new StoreCategoriesController();

categoriesRoutes
    .get('/list',
         EnsuredAuthenticated,
         getAllCategoriesController.handle)
    .post(
        '/create',
        EnsuredAuthenticated,
        ValidateBody(CategoriesSchema),
        storeCategoriesController.handle,
    );

export { categoriesRoutes };
