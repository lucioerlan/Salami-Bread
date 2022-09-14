import { SessionService } from '@modules/services/SessionService/Session.service';
import { UserRequestInterface } from '@modules/interfaces/User.interface';

const sessionService = new SessionService();

const SessionFacades = ({ email, password }: UserRequestInterface) =>
    sessionService.execute({ email, password });

export { SessionFacades };
