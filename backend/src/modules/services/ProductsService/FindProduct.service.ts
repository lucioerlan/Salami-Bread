import http_status_codes from 'http-status-codes';
import { AppError } from '@modules/errors/AppError';
import { ProductsRepositories } from '@modules/repositories/Products.repositories';
import { Products } from '@modules/enums/Products.enum';
import { ProductSearchInterface } from '@modules/interfaces/Products.interface';

export class FindProductService {
    async execute({ id }: ProductSearchInterface) {
        try {
            const productsRepositories = new ProductsRepositories();
            const products = await productsRepositories.findById(id);

            if (!products) {
                return new AppError(
                    Products.PRODUCT_NOT_FOUND,
                    http_status_codes.NOT_FOUND,
                );
            }

            return products;
        } catch (error) {
            return new AppError(
                Products.GET_PRODUCTS_ERROR,
                http_status_codes.NO_CONTENT,
            );
        }
    }
}