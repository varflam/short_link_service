import React from 'react';
import { useSelector } from 'react-redux';
import useLoginUser from '../../hooks/useLoginUser';
import Form from '../form/Form';

const Login = () => {
    const {error} = useSelector(state => state.user);
    const {onLoginUser} = useLoginUser();

    const onSubmit = (user) => {
            onLoginUser(user);
    }

    return (
        <>
            {error ? <p style={{'color': 'red'}}>{error}</p> : null}
            <Form title="Sign in" handleSubmit={onSubmit}/>
        </>
    );
};

export default Login;
