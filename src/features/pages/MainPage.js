import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LinkForm from '../linkForm/LinkForm';
import LinkList from '../linkList/LinkList';

import './page.sass';


const MainPage = () => {
    const {token} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            return navigate('/login');
        }
    }, [token, navigate]);

    return token ? (
        <div className='page'>
            <div className='page__wrapper__link-list'>
                <LinkList/>
            </div>
            <div className='page__wrapper__form'>
                <LinkForm/>
            </div>
        </div>
    ) : null;
};

export default MainPage;