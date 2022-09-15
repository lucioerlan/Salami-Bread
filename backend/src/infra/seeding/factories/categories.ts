import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Categories } from '../../entities';

define(Categories, (faker: typeof Faker) => {
    const category = new Categories();
    category.name = faker.company.bs();
    return category;
});
