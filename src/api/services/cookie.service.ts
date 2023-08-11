import Cookies from 'js-cookie';
import { TOKEN_EXPIRES } from '@/utils/consts';

enum COOKIE_KEY {
  TOKEN = 'TOKEN',
}

class CookieService {
  setToken = (token: string) => {
    Cookies.set(COOKIE_KEY.TOKEN, token, {
      expires: TOKEN_EXPIRES,
    });
  };
  getToken = () => {
    return Cookies.get(COOKIE_KEY.TOKEN);
  };
}

export const cookieService = new CookieService();
