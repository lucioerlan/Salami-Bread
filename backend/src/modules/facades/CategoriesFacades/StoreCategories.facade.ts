import { StoreCategoriesService } from '@modules/services/CategoriesService/StoreCategories.service';
import { CategoriesRequestInterface } from '@modules/interfaces/Categories.interface';

const storeCategoriesService = new StoreCategoriesService();

const StoreCategoriesFacades = ({ name }: CategoriesRequestInterface) =>
    storeCategoriesService.execute({ name });

export { StoreCategoriesFacades };
