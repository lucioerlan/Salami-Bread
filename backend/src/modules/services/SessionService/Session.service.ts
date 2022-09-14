import config from '../../../config';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserRequestInterface } from '../../interfaces/User.interface';

export class SessionService {
    async execute({ email, password }: UserRequestInterface) {
        const user = config.login.find(user => user.username === email);

        if (!user) {
            return new Error('User does not exists!');
        } else if (!await compare(password, user.token)) {
            return new Error('Incorrect password!');
        }

        const token = sign({},
            process.env.SECRET_JWT as string, {
            subject: user.id,
            expiresIn: 300
        });

        return {
            token,
            email,
            iat: new Date().getTime(),
            exp: new Date().getTime(),
        };
    }
}
