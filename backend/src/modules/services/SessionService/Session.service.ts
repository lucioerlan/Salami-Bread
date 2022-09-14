import http_status_codes from 'http-status-codes';
import JwtHelper from '@modules/helpers/Jwt.helper';
import { UserRequestInterface } from '@modules/interfaces/User.interface';
import { Token } from '@modules/enums/Token.enum';
import { AppError } from '@modules/errors/AppError';

export class SessionService {
    async execute({ email, password }: UserRequestInterface) {
        const user = JwtHelper._findUser(email) as {
            username: string;
            token: string;
        };

        if (!(await JwtHelper._compare(password, user.token))) {
            return new AppError(
                Token.INVALID_PASSWORD,
                http_status_codes.UNAUTHORIZED,
            );
        }

        const token = JwtHelper._sign(user.username);

        return {
            token,
            email,
            iat: new Date().getTime(),
            exp: new Date().getTime() + 300,
        };
    }
}
