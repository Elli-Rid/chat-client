import * as Cookies from 'js-cookie';
import { TOKEN_COOKIE_KEY } from '../../app.constants';

export const getToken = (key = TOKEN_COOKIE_KEY) => Cookies.get(key);

export const updateToken = (token, attributes, key = TOKEN_COOKIE_KEY) =>
  Cookies.set(key, token, attributes);

export const clearToken = (key = TOKEN_COOKIE_KEY) => Cookies.remove(key);
