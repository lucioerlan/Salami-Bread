import { SessionService } from 'src/app/services/SessionService/Session.service';
import { UserRequestInterface } from 'src/app/interfaces/User.interface';

const sessionService = new SessionService();

const SessionFacades = ({ email, password }: UserRequestInterface) =>
    sessionService.execute({ email, password });

export { SessionFacades };
