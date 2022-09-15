import http_status_codes from 'http-status-codes';
import { AppError } from '@modules/errors/AppError';
import { ProductsRepositories } from '@modules/repositories/Products.repositories';
import { CategoriesRepositories } from '@modules/repositories/Categories.repositories';
import { ProductsRequestInterface } from '@modules/interfaces/Products.interface';
import { Products } from '@modules/enums/Products.enum';

export class StoreProductsService {
    async execute({ name, category_id }: ProductsRequestInterface) {
        try {
            const productsRepositories = new ProductsRepositories();
            const categoriesRepositories = new CategoriesRepositories();

            if (!(await categoriesRepositories.find(category_id))) {
                return new AppError(
                    Products.CATEGORY_NOT_FOUND,
                    http_status_codes.NOT_FOUND,
                );
            }

            return productsRepositories.store({ name, category_id });
        } catch (error) {
            return new AppError(
                Products.STORE_PRODUCTS_ERROR,
                http_status_codes.NO_CONTENT,
            );
        }
    }
}
