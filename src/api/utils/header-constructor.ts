import { cookieService } from '@/api/services';
import { AxiosHeaders } from 'axios';

const getToken = () => cookieService.getToken();

export class HeadersConstructor extends AxiosHeaders {
  authorization() {
    this.set('Authorization', `Bearer ${ getToken() }`);
    return this;
  }
}
