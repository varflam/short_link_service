import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import useLoginUser from '../../hooks/useLoginUser';
import setContent from '../../utils/setContent';
import Form from '../form/Form';
import useCookieService from '../../hooks/useCookieService';

const Login = () => {
    const {error, status} = useSelector(state => state.user);
    const {onLoginUser} = useLoginUser();
    const {cookies, setCookieForUser} = useCookieService();

    useEffect(() => {
        if(cookies) {
            const user = {
                username: cookies.username,
                password: cookies.password
            }
            onLoginUser(user);
        }
    }, []);

    const onSubmit = (user) => {
        setCookieForUser(user);
        onLoginUser(user);
    }

    return (
        <>
            <Form title="Sign in" handleSubmit={onSubmit}/>
            {setContent(status, error)}
        </>
    );
};

export default Login;
