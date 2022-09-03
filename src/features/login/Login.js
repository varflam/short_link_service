import React from 'react';
import { useLoginUserMutation } from '../../api/apiSlice';

import Form from '../form/Form';

const Login = () => {
    const [loginUser] = useLoginUserMutation();
    
    const onSubmit = (user) => {
        let formBody = [];

        for (let property in user) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        
        formBody = formBody.join("&");

        loginUser(formBody).then(res => console.log(res));
        }

    return (
        <Form title="Sign in" handleSubmit={onSubmit}/>
    );
};

export default Login;