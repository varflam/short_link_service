import React, {useState} from 'react';
import { useSetUserMutation } from '../../api/apiSlice';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [setUser] = useSetUserMutation();

    const onSubmit = e => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <div>
            <h1>Sign Up</h1>
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
        </div>
    );
};

export default RegisterPage;