import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';

import src from '../../assets/backgrounds/bg.jpg';

import './page.sass';

const LoginPage = () => {    

    return (
        <div className='page'>
            <img src={src} alt="background" className='page__img'/>
            <div className='page__wrapper'>
                <h1 className='page__title'>Sign In</h1>
                <p className='page__descr'>If you don’t have an account register</p>
                <p className='page__descr'>You can <Link to="/register">Register here</Link>!</p>
                <Login/>
            </div>
        </div>
    );
};

export default LoginPage;