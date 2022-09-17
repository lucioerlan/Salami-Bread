import { JwtPayload } from 'jsonwebtoken';
import JwtHelper from '@modules/helpers/Jwt.helper';
import { TokenInterface } from '@modules/interfaces/User.interface';

export class RefreshService {
    execute({ access_token }: TokenInterface) {
        const { sub } = JwtHelper._decode(access_token) as JwtPayload;

        const user = JwtHelper._findUser(sub) as {
            username: string;
            token: string;
        };

        const newToken = JwtHelper._sign(user.username);

        return {
            token: newToken,
            email: user.username,
            iat: new Date().getTime(),
            exp: new Date().getTime() + 300,
        };
    }
}
