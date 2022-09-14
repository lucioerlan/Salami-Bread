import http_status_codes from 'http-status-codes';
import { sign, decode } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { AppError } from '@modules/errors/AppError';
import { Token } from '@modules/enums/Token.enum';
import config from '@config/default.json';

class JwtHelper {
    _decode(token: string) {
        try {
            const decoded = decode(token);

            if (!decoded) {
                throw new AppError(
                    Token.INVALID_TOKEN,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return decoded;
        } catch (error) {
            return new AppError(
                Token.TOKEN_NOT_PROVIDED,
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
                    Token.TOKEN_NOT_GENERATED,
                    http_status_codes.BAD_REQUEST,
                );
            }

            return token;
        } catch (err) {
            return new AppError(
                Token.ERROR_TO_GENERATE_TOKEN,
                http_status_codes.BAD_REQUEST,
            );
        }
    }

    _compare(password: string, hash: string) {
        try {
            const isValid = compare(password, hash);

            if (!isValid || isValid instanceof Error) {
                throw new AppError(
                    Token.INVALID_TOKEN,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return isValid;
        } catch (err) {
            return new AppError(
                Token.ERROR_TO_COMPARE_PASSWORD,
                http_status_codes.BAD_REQUEST,
            );
        }
    }

    _findUser(email: string | undefined) {
        try {
            const user = config.login.find(user => user.username === email);

            if (!user) {
                return new AppError(
                    Token.USER_NOT_FOUND,
                    http_status_codes.UNAUTHORIZED,
                );
            }

            return user;
        } catch (err) {
            return new AppError(
                Token.ERROR_TO_FIND_USER,
                http_status_codes.BAD_REQUEST,
            );
        }
    }
}

export default new JwtHelper();
