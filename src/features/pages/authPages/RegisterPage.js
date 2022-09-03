import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../../register/Register';

import src from '../../../assets/backgrounds/bg.jpg';

import './authPage.sass';

const RegisterPage = () => {
    
    return (
        <div className='auth-page'>
            <img src={src} alt="background" className='auth-page__img'/>
            <div className='auth-page__wrapper'>
                <h1 className='auth-page__title'>Sign Up</h1>
                <p className='auth-page__descr'>If you already have an account register</p>
                <p className='auth-page__descr'>You can <Link to="/">Login here</Link>!</p>
                <Register/>
            </div>
        </div>
    );
};

export default RegisterPage;