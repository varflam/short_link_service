import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useCookieService from '../../hooks/useCookieService';
import LinkForm from '../linkForm/LinkForm';
import LinkList from '../linkList/LinkList';
import Logout from '../logout/Logout';

import './page.sass';


const MainPage = () => {
    const navigate = useNavigate();
    const {cookies} = useCookieService();

    useEffect(() => {
        if(!cookies.token) {
            return navigate('/login');
        } 
    }, [cookies.token, navigate]);

    return cookies.token ? (
        <div className='page'>
            <div className='page__wrapper__link-list'>
                <Logout/>
                <LinkList/>
            </div>
            <div className='page__wrapper__form'>
                <LinkForm/>
            </div>
        </div>
    ) : null;
};

export default MainPage;