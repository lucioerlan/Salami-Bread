import { CategoriesRepositories } from 'src/app/repositories/Categories.repositories';

export class GetAllCategoriesService {
    execute() {
        const categoriesRepositories = new CategoriesRepositories();

        return categoriesRepositories.getAll();
    }
}
