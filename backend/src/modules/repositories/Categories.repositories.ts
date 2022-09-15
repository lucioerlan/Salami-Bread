import { getRepository } from 'typeorm';
import { Categories } from '@infra/entities/categories';
import { CategoriesRequestInterface } from '@modules/interfaces/Categories.interface';

export class CategoriesRepositories {
    getAll() {
        return getRepository(Categories)
            .createQueryBuilder('Categories')
            .maxExecutionTime(5000)
            .getMany();
    }

    store({ name }: CategoriesRequestInterface) {
        return getRepository(Categories)
            .createQueryBuilder('Categories')
            .insert()
            .into(Categories)
            .values({ name })
            .execute();
    }
}
