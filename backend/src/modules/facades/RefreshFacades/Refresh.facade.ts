import { RefreshService } from '@modules/services/RefreshService/Refresh.service';
import { TokenInterface } from '@modules/interfaces/User.interface';

const refreshService = new RefreshService();

const RefreshFacades = ({ token }: TokenInterface) =>
    refreshService.execute({ token });

export { RefreshFacades };
