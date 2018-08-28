import {getToken} from "./token";

export const isAuthenticate = () => {
    return !!getToken();
};
