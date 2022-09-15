import { Router } from 'express';
import { SessionController } from '@modules/controllers/SessionController/Session.controller';
import {
    SessionSchema,
    RefreshSchema,
} from '@modules/validators/SessionValidators/Session.validators';
import { RefreshController } from '@modules/controllers/RefreshController/Refresh.controller';
import ValidateBody from '@modules/middlewares/Validator.middleware';

const userRoutes = Router();
const loginController = new SessionController();
const refreshController = new RefreshController();

userRoutes
    .post('/auth',
          ValidateBody(SessionSchema),
          loginController.handle)

    .post(
        '/auth/refresh',
        ValidateBody(RefreshSchema),
        refreshController.handle,
    );

export { userRoutes };
