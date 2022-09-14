import React from 'react';
import { useDispatch } from 'react-redux';
import useCookieService from '../../hooks/useCookieService';
import { logUserOut } from '../../store/slices/userSlice';

import './logout.sass';

const Logout = () => {
    const {removeCookieForUser} = useCookieService();
    const dispatch = useDispatch();

    const onLogOut = () => {
        removeCookieForUser();
        dispatch(logUserOut());
    }

    return (
        <button 
            className='button'
            onClick={onLogOut}>Log out</button>
    );
};

export default Logout;