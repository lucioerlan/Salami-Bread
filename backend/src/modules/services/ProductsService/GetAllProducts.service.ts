import http_status_codes from 'http-status-codes';
import { AppError } from '@modules/errors/AppError';
import { ProductsRepositories } from '@modules/repositories/Products.repositories';
import { Products } from '@modules/enums/Products.enum';
import { ProductsPaginationInterface } from '@modules/interfaces/Products.interface';
import PaginationHelper  from '@modules/helpers/Pagination.helper';

export class GetAllProductsService {
    async execute({ page }: ProductsPaginationInterface) {
        try {
            const productsRepositories = new ProductsRepositories();
            const products = await productsRepositories.find();

            if (!products) {
                return new AppError(
                    Products.PRODUCT_NOT_FOUND,
                    http_status_codes.NOT_FOUND,
                );
            }

            return PaginationHelper._limit(page, 15, products);
        } catch (error) {
            return new AppError(
                Products.GET_PRODUCTS_ERROR,
                http_status_codes.NO_CONTENT,
            );
        }
    }
}
