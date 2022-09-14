import { SessionService } from '../../services/SessionService/Session.service';
import { UserRequestInterface } from '../../interfaces/User.interface';

const SessionFacades = ({ email, password }: UserRequestInterface) => {
    const sessionService = new SessionService();
    return sessionService.execute({ email, password });
};

export { SessionFacades };
