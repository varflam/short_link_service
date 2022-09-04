import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../api/apiSlice';
import { setAuthUser, setError } from '../../store/slices/userSlice';

import Form from '../form/Form';

const Login = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();

    const onSubmit = (user) => {

        loginUser(formLoginUser(user))
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
                    dispatch(setAuthUser({
                        ...user,
                        token: res.data.access_token}));
                    navigate('/');
                }
            });
        }

    return (
        <>
            {error ? <p style={{'color': 'red'}}>{error}</p> : null}
            <Form title="Sign in" handleSubmit={onSubmit}/>
        </>
    );
};

export default Login;

export const formLoginUser = (user) => {
    let formBody = [];

    for (let property in user) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(user[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    
    return formBody = formBody.join("&");
}