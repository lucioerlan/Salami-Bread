import http_status_codes from 'http-status-codes';
import { sign, decode } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { AppError } from 'src/app/errors/AppError';
import { TOKEN } from 'src/app/constants/Token.constants';
import config from 'src/config';

class JwtHelper {
    _decode(token: string) {
        try {
            const decoded = decode(token);

            if (!decoded) {
                throw new AppError(
                    TOKEN.INVALID_TOKEN,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return decoded;
        } catch (error) {
            return new AppError(
                TOKEN.TOKEN_NOT_PROVIDED,
                http_status_codes.UNAUTHORIZED,
            );
        }
    }

    _sign(username: string) {
        try {
            const token = sign({}, process.env.SECRET_JWT as string, {
                subject: username,
                expiresIn: 300,
            });

            if (!token) {
                throw new AppError(
                    TOKEN.TOKEN_NOT_GENERATED,
                    http_status_codes.BAD_REQUEST,
                );
            }

            return token;
        } catch (err) {
            return new AppError(
                TOKEN.ERROR_TO_GENERATE_TOKEN,
                http_status_codes.BAD_REQUEST,
            );
        }
    }

    _compare(password: string, hash: string) {
        try {
            const isValid = compare(password, hash);

            if (!isValid || isValid instanceof Error) {
                throw new AppError(
                    TOKEN.INVALID_TOKEN,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return isValid;
        } catch (err) {
            return new AppError(
                TOKEN.ERROR_TO_COMPARE_PASSWORD,
                http_status_codes.BAD_REQUEST,
            );
        }
    }

    _findUser(email: string | undefined) {
        try {
            const user = config.login.find(user => user.username === email);

            if (!user) {
                return new AppError(
                    TOKEN.USER_NOT_FOUND,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return user;
        } catch (err) {
            return new AppError(
                TOKEN.ERROR_TO_FIND_USER,
                http_status_codes.BAD_REQUEST,
            );
        }
    }
}

export default new JwtHelper();
