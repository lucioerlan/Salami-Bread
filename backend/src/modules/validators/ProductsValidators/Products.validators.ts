import Joi from 'joi';

export const ProductsSchema = Joi.object({
    name: Joi.string().min(3).required(),
    category_id: Joi.number().required(),
});
