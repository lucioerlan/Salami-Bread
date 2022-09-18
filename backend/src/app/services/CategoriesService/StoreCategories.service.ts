import { CategoriesRepositories } from 'src/app/repositories/Categories.repositories';
import { CategoriesRequestInterface } from 'src/app/interfaces/Categories.interface';

export class StoreCategoriesService {
    execute({ name }: CategoriesRequestInterface) {
        const categoriesRepositories = new CategoriesRepositories();

        return categoriesRepositories.store({ name });
    }
}
