import { ProductsRepositories } from 'src/app/repositories/Products.repositories';
import { Products } from 'src/app/enums/Products.enum';
import { ProductSearchInterface } from 'src/app/interfaces/Products.interface';

export class FindProductService {
    async execute({ id }: ProductSearchInterface) {
        const productsRepositories = new ProductsRepositories();
        const products = await productsRepositories.findById(id);

        if (!products) {
            return new Error(Products.PRODUCT_NOT_FOUND);
        }

        return products;
    }
}
