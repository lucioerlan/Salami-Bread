import { getRepository } from 'typeorm';
import { Products } from 'src/app/entities';
import { ProductsRequestInterface } from 'src/app/interfaces/Products.interface';

export class ProductsRepositories {
    store({ name, category_id }: ProductsRequestInterface) {
        return getRepository(Products)
            .createQueryBuilder('Products')
            .insert()
            .into(Products)
            .values({ name, category_id })
            .execute();
    }

    find() {
        return getRepository(Products)
            .createQueryBuilder('p')
            .select([
                'c.id as category_id',
                'c.name as category_name',
				'p.id as product_id',
                'p.name as product_name'
            ])
            .innerJoin('Categories', 'c', 'c.id = p.category_id')
            .getRawMany()
    }

    findById(id: string) {
        return getRepository(Products)
            .createQueryBuilder('p')
            .select([
                'c.id as category_id',
                'c.name as category_name',
				'p.id as product_id',
                'p.name as product_name'
            ])
            .where('p.id = :id', { id })
            .innerJoin('Categories', 'c', 'c.id = p.category_id')
            .getRawOne();
    }
}
