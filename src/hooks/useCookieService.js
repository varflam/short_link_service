import { useCookies } from 'react-cookie';

const useCookieService = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['username', 'password', 'token']);

    const setUserCookie = (username, password) => {
        setCookie('username', username, { path: '/' });
        setCookie('password', password, { path: '/' });
    }
    
    const removeUserCookie = () => {
        removeCookie('username', { path: '/' });
        removeCookie('password', { path: '/' });
    }

    const setCookieToken = token => {
        setCookie('token', token, { path: '/' });
    }

    const removeCookieToken = () => {
        removeCookie('token', { path: '/' });
    }

    return {
        setUserCookie,
        removeUserCookie,
        setCookieToken,
        removeCookieToken,
        cookies
    };
};

export default useCookieService;