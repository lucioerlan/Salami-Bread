import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { Products } from 'src/app/enums/Products.enum';
import { ProductsPaginationInterface } from 'src/app/interfaces/Products.interface';
import PaginationHelper from 'src/app/helpers/Pagination.helper';

export class GetAllProductsService {
    async execute({ page }: ProductsPaginationInterface) {
        const productsRepositories = new ProductsRepositories();
        const products = await productsRepositories.find();

        if (!products) {
            return new Error(Products.PRODUCT_NOT_FOUND);
        }

        return PaginationHelper._limit(page, 15, products);
    }
}
