import { FindProductService } from '@modules/services/ProductsService/FindProduct.service';
import { ProductSearchInterface } from '@modules/interfaces/Products.interface';

const findProductService = new FindProductService();

const FindProductFacades = ({ id }: ProductSearchInterface) =>
    findProductService.execute({ id });

export { FindProductFacades };
