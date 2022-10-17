import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { PRODUCTS } from 'src/app/constants/Products.constants';
import { ProductsPaginationInterface } from 'src/app/interfaces/Products.interface';
import PaginationHelper from 'src/app/helpers/Pagination.helper';

export class GetAllProductsService {
    async execute({ page }: ProductsPaginationInterface) {
        const productsRepositories = new ProductsRepositories();
        const products = await productsRepositories.find();

        if (!products) {
            return new Error(PRODUCTS.PRODUCT_NOT_FOUND);
        }

        return PaginationHelper._limit(page, 15, products);
    }
}
