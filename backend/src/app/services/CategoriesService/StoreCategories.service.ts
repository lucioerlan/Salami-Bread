import http_status_codes from 'http-status-codes';
import { AppError } from 'src/app/errors/AppError';
import { CategoriesRepositories } from 'src/app/repositories/Categories.repositories';
import { CategoriesRequestInterface } from 'src/app/interfaces/Categories.interface';
import { Categories } from 'src/app/enums/Categories.enum';

export class StoreCategoriesService {
    execute({ name }: CategoriesRequestInterface) {
        try {
            const categoriesRepositories = new CategoriesRepositories();

            return categoriesRepositories.store({ name });
        } catch (error) {
            return new AppError(
                Categories.GET_CATEGORIES_ERROR,
                http_status_codes.NO_CONTENT,
            );
        }
    }
}
