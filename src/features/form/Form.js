import React, {useState} from 'react';

import './form.sass';

const Form = ({title, handleSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        };

        handleSubmit(user);

        setUsername('');
        setPassword('');
    }

    return (
        <form 
            className='form'
            onSubmit={(e) => onSubmit(e)}>
            <label 
                htmlFor='username'
                className='form__label'>Your username</label>
            <input 
                className='form__input'
                required
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='username'
                 />

            <label 
                htmlFor='password'
                className='form__label'>Your password</label>
            <input 
                className='form__input'
                required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                 />

            <button 
                className='form__btn'
                type='submit'>{title}</button>
        </form>
    );
};

export default Form;