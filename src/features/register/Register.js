import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSetUserMutation } from '../../api/apiSlice';
import { setError } from '../../store/slices/userSlice';
import useLoginUser from '../../hooks/useLoginUser';
import setContent from '../../utils/setContent';

import Form from '../form/Form';

const Register = () => {
    const dispatch = useDispatch();
    const {error, status} = useSelector(state => state.user);
    const [setUser] = useSetUserMutation();
    const {onLoginUser} = useLoginUser();
    const onSubmit = (user) => {
        setUser(user)
            .then(res => {
                if(res.error) {
                    dispatch(setError(res.error.data.detail));
                } else if(res.data) {
                    onLoginUser(user);
                }
            });
    }
    
    return (
        <>
            <Form title="Sign Up" handleSubmit={onSubmit}/>
            {setContent(status, error)}
        </>
    );
};

export default Register;