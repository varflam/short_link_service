import React from 'react';
import { useDispatch } from 'react-redux';
import useCookieService from '../../hooks/useCookieService';
import { logUserOut } from '../../store/slices/userSlice';

import './logout.sass';

const Logout = () => {
    const {removeUserCookie, removeCookieToken} = useCookieService();
    const dispatch = useDispatch();

    const onLogOut = () => {
        removeUserCookie();
        removeCookieToken();
        dispatch(logUserOut());
    }

    return (
        <button 
            className='button'
            onClick={onLogOut}>Log out</button>
    );
};

export default Logout;