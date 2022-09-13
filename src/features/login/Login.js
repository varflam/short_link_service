import React from 'react';
import { useSelector } from 'react-redux';
import useLoginUser from '../../hooks/useLoginUser';
import setContent from '../../utils/setContent';
import Form from '../form/Form';

const Login = () => {
    const {error, status} = useSelector(state => state.user);
    const {onLoginUser} = useLoginUser();

    const onSubmit = (user) => {
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
