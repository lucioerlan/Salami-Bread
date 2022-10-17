import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { PRODUCTS } from 'src/app/constants/Products.constants';
import { ProductSearchInterface } from 'src/app/interfaces/Products.interface';

export class FindProductService {
    async execute({ id }: ProductSearchInterface) {
        const productsRepositories = new ProductsRepositories();
        const products = await productsRepositories.findById(id);

        if (!products) {
            return new Error(PRODUCTS.PRODUCT_NOT_FOUND);
        }

        return products;
    }
}
