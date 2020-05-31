import { IBaseResponse, IImage } from 'src/app/shared/http/response';

export interface IAboutDetailPage extends IBaseResponse {
  title: string;
  logo: IImage;
}
