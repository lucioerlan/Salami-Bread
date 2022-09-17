import { StoreCategoriesService } from 'src/app/services/CategoriesService/StoreCategories.service';
import { CategoriesRequestInterface } from 'src/app/interfaces/Categories.interface';

const storeCategoriesService = new StoreCategoriesService();

const StoreCategoriesFacades = ({ name }: CategoriesRequestInterface) =>
    storeCategoriesService.execute({ name });

export { StoreCategoriesFacades };
