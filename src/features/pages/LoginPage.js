import React from 'react';
import Form from '../form/Form'


const LoginPage = () => {
    const onHandleSubmit = () => {
        console.log('tyref');
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Form title="Sign in" handleSubmit={onHandleSubmit}/>
        </div>
    );
};

export default LoginPage;