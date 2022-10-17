import Joi from 'joi';

export const SessionSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const RefreshSchema = Joi.object({
    access_token: Joi.string().min(100).required(),
});
