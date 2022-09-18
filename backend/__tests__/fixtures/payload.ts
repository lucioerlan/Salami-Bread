import { sign } from 'jsonwebtoken';
import config from '../../src/config';

const createAuth = {
    email: config.login[0].username,
    password: config.login[0].password,
};

const token = sign({}, 'secret', {
    subject: createAuth.email,
    expiresIn: 300,
});

const refreshToken = {
    access_token: token,
};

const createCategory = {
    name: 'Awesome category',
};

const createProduct = {
    name: 'Foo hehehe',
    category_id: '1',
};

export { createAuth, refreshToken, createCategory, createProduct, token };
