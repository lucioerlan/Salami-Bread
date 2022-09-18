import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { CategoriesRepositories } from 'src/app/repositories/Categories.repositories';
import { ProductsRequestInterface } from 'src/app/interfaces/Products.interface';
import { Products } from 'src/app/enums/Products.enum';

export class StoreProductsService {
    async execute({ name, category_id }: ProductsRequestInterface) {
        const productsRepositories = new ProductsRepositories();
        const categoriesRepositories = new CategoriesRepositories();

        if (!(await categoriesRepositories.find(category_id))) {
            return new Error(Products.CATEGORY_NOT_FOUND);
        }

        return productsRepositories.store({ name, category_id });
    }
}
