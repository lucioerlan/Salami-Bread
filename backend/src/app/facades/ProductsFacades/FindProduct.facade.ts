import { FindProductService } from 'src/app/services/ProductsService/FindProduct.service';
import { ProductSearchInterface } from 'src/app/interfaces/Products.interface';

const findProductService = new FindProductService();

const FindProductFacades = ({ id }: ProductSearchInterface) =>
    findProductService.execute({ id });

export { FindProductFacades };
