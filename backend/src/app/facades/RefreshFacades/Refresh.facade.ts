import { RefreshService } from 'src/app/services/RefreshService/Refresh.service';
import { TokenInterface } from 'src/app/interfaces/User.interface';

const refreshService = new RefreshService();

const RefreshFacades = ({ access_token }: TokenInterface) =>
    refreshService.execute({ access_token });

export { RefreshFacades };
