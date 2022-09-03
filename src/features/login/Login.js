import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../api/apiSlice';
import { setIsAuth, setError } from '../../store/slices/userSlice';

import Form from '../form/Form';

const Login = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();

    const onSubmit = (user) => {
        let formBody = [];
        
        for (let property in user) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        
        formBody = formBody.join("&");

        loginUser(formBody)
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
                    dispatch(setIsAuth(res.data.access_token));
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