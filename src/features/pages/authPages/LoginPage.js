import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../login/Login';

import src from '../../../assets/backgrounds/bg.jpg';

import './authPage.sass';

const LoginPage = () => {
    


    return (
        <div className='auth-page'>
            <img src={src} alt="background" className='auth-page__img'/>
            <div className='auth-page__wrapper'>
                <h1 className='auth-page__title'>Sign In</h1>
                <p className='auth-page__descr'>If you don’t have an account register</p>
                <p className='auth-page__descr'>You can <Link to="/register">Register here</Link>!</p>
                <Login/>
            </div>
        </div>
    );
};

export default LoginPage;