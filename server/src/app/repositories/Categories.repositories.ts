import { getRepository } from 'typeorm';
import { Categories } from 'src/app/entities';
import { CategoriesRequestInterface } from 'src/app/interfaces/Categories.interface';

export class CategoriesRepositories {
    getAll() {
        return getRepository(Categories).find();
    }

    find(id: number) {
        return getRepository(Categories).find({
            where: {
                id,
            },
        });
    }

    store({ name }: CategoriesRequestInterface) {
        return getRepository(Categories).save({ name });
    }
}
