import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../register/Register';

const RegisterPage = () => {
    
    return (
        <div>
            <h1>Sign Up</h1>
            <p>If you already have an account register</p>
            <p>You can <Link to="/">Login here</Link>!</p>
            <Register/>
        </div>
    );
};

export default RegisterPage;