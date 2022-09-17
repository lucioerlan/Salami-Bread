import { Router } from 'express';
import { SessionController } from 'src/app/controllers/SessionController/Session.controller';
import {
    SessionSchema,
    RefreshSchema,
} from 'src/app/validators/SessionValidators/Session.validators';
import { RefreshController } from 'src/app/controllers/RefreshController/Refresh.controller';
import ValidateBody from 'src/app/middlewares/Validator.middleware';

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
