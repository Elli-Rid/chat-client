export const BASENAME = '/';
export const TOKEN_COOKIE_KEY = 'chat_client_token';

export const BACKEND_ROOT_URL = 'http://localhost:8000';
export const BACKEND_PATHS = {
    login: '/api/auth/login/'
};

export const DEFAULT_AVATAR = 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png';


export const backendUrlFor = key => {
    return `${BACKEND_ROOT_URL}${BACKEND_PATHS[key]}`
};
