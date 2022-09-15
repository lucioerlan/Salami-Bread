import Joi from 'joi';

export const CategoriesSchema = Joi.object({
    name: Joi.string().min(3).required(),
});
