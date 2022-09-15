import { StoreProductsService } from '@modules/services/ProductsService/StoreProducts.service';
import { ProductsRequestInterface } from '@modules/interfaces/Products.interface';

const storeProductsService = new StoreProductsService();

const StoreProductsFacades = ({ name, category_id }: ProductsRequestInterface) =>
    storeProductsService.execute({ name, category_id });

export { StoreProductsFacades };
