import { useCookies } from 'react-cookie';

const useCookieService = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const setCookieToken = token => {
        setCookie('token', token, { path: '/' });
    }

    const removeCookieToken = () => {
        removeCookie('token', { path: '/' });
    }

    return {
        setCookieToken,
        removeCookieToken,
        cookies
    };
};

export default useCookieService;