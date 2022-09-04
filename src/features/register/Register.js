import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSetUserMutation, useLoginUserMutation } from '../../api/apiSlice';
import { setAuthUser, setError } from '../../store/slices/userSlice';
import { formLoginUser } from '../login/Login';

import Form from '../form/Form';

const Register = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);
    const [setUser] = useSetUserMutation();
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();

    const onSubmit = (user) => {
        setUser(user)
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
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
            });
    }
    
    return (
        <>
            {error ? <p style={{'color': 'red'}}>{`User ${error.slice(20, 27)} already exists`}</p> : null}
            <Form title="Sign Up" handleSubmit={onSubmit}/>
        </>
    );
};

export default Register;