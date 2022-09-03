import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const {isAuth} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            return navigate('/login');
        }
    }, [isAuth, navigate]);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default MainPage;