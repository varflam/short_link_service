import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LinkForm from '../linkForm/LinkForm';
import LinkList from '../linkList/LinkList';

import src from '../../assets/backgrounds/bg.jpg';

const MainPage = () => {
    const {isAuth} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            return navigate('/login');
        }
    }, [isAuth, navigate]);

    return (
        <div className='page'>
            <img src={src} alt="background" className='page__img'/>
            <div className='page__wrapper'>
                <LinkForm/>
                <LinkList/>
            </div>
        </div>
    );
};

export default MainPage;