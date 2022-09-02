import React, {useState} from 'react';

const Form = ({title, handleSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        handleSubmit();
    }

    return (
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

            <button type='submit'>{title}</button>
        </form>
    );
};

export default Form;