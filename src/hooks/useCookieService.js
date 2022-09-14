import { useCookies } from 'react-cookie';

const useCookieService = () => {
    const [cookies, setCookie] = useCookies(['username', 'password', 'token']);

    const setCookieForUser = user => {
        const {username, password} = user;
        setCookie('username', username, { path: '/' });
        setCookie('password', password, { path: '/' });
    }

    return {
        setCookieForUser,
        cookies
    };
};

export default useCookieService;