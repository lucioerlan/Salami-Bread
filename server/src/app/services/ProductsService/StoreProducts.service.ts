import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { CategoriesRepositories } from 'src/app/repositories/Categories.repositories';
import { ProductsRequestInterface } from 'src/app/interfaces/Products.interface';
import { PRODUCTS } from 'src/app/constants/Products.constants';

export class StoreProductsService {
    async execute({ name, category_id }: ProductsRequestInterface) {
        const productsRepositories = new ProductsRepositories();
        const categoriesRepositories = new CategoriesRepositories();

        if (!(await categoriesRepositories.find(category_id))) {
            return new Error(PRODUCTS.CATEGORY_NOT_FOUND);
        }

        return productsRepositories.store({ name, category_id });
    }
}
