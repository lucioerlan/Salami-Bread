import http_status_codes from 'http-status-codes';
import { AppError } from 'src/app/errors/AppError';
import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { Products } from 'src/app/enums/Products.enum';
import { ProductsPaginationInterface } from 'src/app/interfaces/Products.interface';
import PaginationHelper  from 'src/app/helpers/Pagination.helper';

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
