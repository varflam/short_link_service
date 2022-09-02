import React, {useState} from 'react';
import Form from '../form/Form';

import { useLoginUserMutation } from '../../api/apiSlice';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser] = useLoginUserMutation();
    
    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username,
            password
        };

        let formBody = [];

        for (let property in user) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        
        formBody = formBody.join("&");

        loginUser(formBody).then(res => console.log(res));
        
        setUsername('');
        setPassword('');
        }


    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor='username'>Your username</label>
                <input 
                    required
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='username'
                    />

                <label htmlFor='password'>Your password</label>
                <input 
                    required
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                <button type='submit'>Sign in</button>
            </form>
            {/* <Form title="Sign in" handleSubmit={onHandleSubmit}/> */}
        </div>
    );
};

export default LoginPage;