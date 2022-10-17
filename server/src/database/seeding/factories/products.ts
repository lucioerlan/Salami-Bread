import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Products } from '../../../app/entities';

define(Products, (faker: typeof Faker) => {
    const product = new Products();
    product.name = faker.name.firstName();
    product.category_id = Math.floor(Math.random() * 5) + 1;
    return product;
});
