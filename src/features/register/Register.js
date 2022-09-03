import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSetUserMutation } from '../../api/apiSlice';
import { setIsAuth, setError } from '../../store/slices/userSlice';

import Form from '../form/Form';

const Register = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);
    const [setUser] = useSetUserMutation();
    const onSubmit = (user) => {
        setUser(user)
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
                    dispatch(setIsAuth(res.data.access_token));
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