import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../register/Register';

import src from '../../assets/backgrounds/bg.jpg';

import './page.sass';

const RegisterPage = () => {
    
    return (
        <div className='page'>
            <img src={src} alt="background" className='page__img'/>
            <div className='page__wrapper'>
                <h1 className='page__title'>Sign Up</h1>
                <p className='page__descr'>If you already have an account register</p>
                <p className='page__descr'>You can <Link to="/">Login here</Link>!</p>
                <Register/>
            </div>
        </div>
    );
};

export default RegisterPage;