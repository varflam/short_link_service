import { useCookies } from 'react-cookie';

const useCookieService = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['username', 'password', 'token']);

    const setCookieForUser = user => {
        const {username, password} = user;
        setCookie('username', username, { path: '/' });
        setCookie('password', password, { path: '/' });
    }

    const removeCookieForUser = () => {
        removeCookie('username', { path: '/' });
        removeCookie('password', { path: '/' });
    }

    return {
        setCookieForUser,
        removeCookieForUser,
        cookies
    };
};

export default useCookieService;