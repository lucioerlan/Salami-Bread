import { GetAllProductsService } from 'src/app/services/ProductsService/GetAllProducts.service';
import { ProductsPaginationInterface } from 'src/app/interfaces/Products.interface';

const getAllProductsService = new GetAllProductsService();

const GetAllProductsFacades = ({ page }: ProductsPaginationInterface) =>
    getAllProductsService.execute({ page });

export { GetAllProductsFacades };
