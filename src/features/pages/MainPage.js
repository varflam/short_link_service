import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LinkForm from '../linkForm/LinkForm';
import LinkList from '../linkList/LinkList';


const MainPage = () => {
    const {isAuth} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            return navigate('/login');
        }
    }, [isAuth, navigate]);

    return isAuth ? (
        <div className='page'>
            <div className='page__link-list__wrapper'>
                <LinkList/>
            </div>
            <div className='page__wrapper'>
                <LinkForm/>
            </div>
        </div>
    ) : null;
};

export default MainPage;