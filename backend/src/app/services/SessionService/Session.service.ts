import JwtHelper from 'src/app/helpers/Jwt.helper';
import { UserRequestInterface } from 'src/app/interfaces/User.interface';
import { Token } from 'src/app/enums/Token.enum';

export class SessionService {
    async execute({ email, password }: UserRequestInterface) {
        const user = JwtHelper._findUser(email) as {
            username: string;
            token: string;
        };

        if (!(await JwtHelper._compare(password, user.token))) {
            return new Error(Token.INVALID_PASSWORD);
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
