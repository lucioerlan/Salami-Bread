import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Categories } from '../../entities/categories';

define(Categories, (faker: typeof Faker) => {
    const category = new Categories();
    category.name = faker.name.firstName();
    return category;
});
