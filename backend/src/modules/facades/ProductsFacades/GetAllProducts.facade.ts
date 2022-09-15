import { GetAllProductsService } from '@modules/services/ProductsService/GetAllProducts.service';
import { ProductsPaginationInterface } from '@modules/interfaces/Products.interface';

const getAllProductsService = new GetAllProductsService();

const GetAllProductsFacades = ({ page }: ProductsPaginationInterface) =>
    getAllProductsService.execute({ page });

export { GetAllProductsFacades };
