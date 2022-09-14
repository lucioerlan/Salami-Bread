import http_status_codes from 'http-status-codes';
import { JwtPayload } from 'jsonwebtoken';
import JwtHelper from '@modules/helpers/Jwt.helper';
import { TokenInterface } from '@modules/interfaces/User.interface';
import { Token } from '@modules/enums/Token.enum';
import { AppError } from '@modules/errors/AppError';

export class RefreshService {
    execute({ token }: TokenInterface) {
        const { sub, exp } = JwtHelper._decode(token) as JwtPayload;

        if (exp && exp < (new Date().getTime() + 300) / 1000) {
            return new AppError(
                Token.TOKEN_EXPIRED,
                http_status_codes.UNAUTHORIZED,
            );
        }

        const user = JwtHelper._findUser(sub) as {
            username: string;
            token: string;
        };

        const newToken = JwtHelper._sign(user.username);

        return {
            token,
            newRefreshToken: newToken,
            email: user.username,
            iat: new Date().getTime(),
            exp: new Date().getTime() + 300,
        };
    }
}
