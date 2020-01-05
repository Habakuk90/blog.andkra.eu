import { ILink, IBaseResponse } from 'src/app/shared/http/response';

export interface INavigation extends IBaseResponse {
    links: ILink[];
}
