import { RefreshService } from '@modules/services/RefreshService/Refresh.service';
import { TokenInterface } from '@modules/interfaces/User.interface';

const refreshService = new RefreshService();

const RefreshFacades = ({ access_token }: TokenInterface) =>
    refreshService.execute({ access_token });

export { RefreshFacades };
