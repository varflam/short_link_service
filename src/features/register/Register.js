import React from 'react';
import { useSetUserMutation } from '../../api/apiSlice';

import Form from '../form/Form';

const Register = () => {
    const [setUser] = useSetUserMutation();

    const onSubmit = (user) => {
        setUser(user).then(res => console.log(res));
    }
    
    return (
        <Form title="Sign Up" handleSubmit={onSubmit}/>
    );
};

export default Register;