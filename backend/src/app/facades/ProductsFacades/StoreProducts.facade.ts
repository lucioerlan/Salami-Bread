import { StoreProductsService } from 'src/app/services/ProductsService/StoreProducts.service';
import { ProductsRequestInterface } from 'src/app/interfaces/Products.interface';

const storeProductsService = new StoreProductsService();

const StoreProductsFacades = ({ name, category_id }: ProductsRequestInterface) =>
    storeProductsService.execute({ name, category_id });

export { StoreProductsFacades };
