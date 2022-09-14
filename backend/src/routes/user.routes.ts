import { Router } from 'express';
import { SessionController } from '../modules/controllers/SessionController/Session.controller';
import { SessionSchema } from '../modules/validators/SessionValidators/Session.validators';
import ValidateBody from '../modules/middlewares/Validator.middleware';

const userRoutes = Router();
const loginController = new SessionController();

userRoutes
    .post('/login', ValidateBody(SessionSchema), loginController.handle);

export { userRoutes };
