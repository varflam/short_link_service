import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';


const LoginPage = () => {
    


    return (
        <div>
            <h1>Sign In</h1>
            <p>If you don’t have an account register</p>
            <p>You can <Link to="/register">Register here</Link>!</p>
            <Login/>
        </div>
    );
};

export default LoginPage;