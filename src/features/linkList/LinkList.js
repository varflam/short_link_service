import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import useLoginUser from '../../hooks/useLoginUser';
import useCookieService from '../../hooks/useCookieService';
import { setToken } from '../../store/slices/userSlice';
import LinkListItem from '../linkListItem/LinkListItem';
import LinkFilter from '../linkFilter/LinkFilter';

import './linkList.sass';

const setContent = (process, elements) => {
    switch (process) {
        case 'waiting':
            return (<tr className="link-list__notice">
                        <td colSpan="3" >Please wait...</td>
                    </tr>)
        case 'confirmed':
            return elements;
        case 'error':
            return (<tr className="link-list__notice">
                        <td colSpan="3" >Unexpected error</td>
                    </tr>)
        default:
            throw new Error('Unexpected error');
    }
};

const LinkList = () => {
    const {sortBy} = useSelector(state => state.links);
    const dispatch = useDispatch();
    const {cookies} = useCookieService();
    const [isSkipped, setIsSkipped] = useState(true);
    const {
        data: links = [],
        isLoading,
        isError
    } = useGetStatisticsQuery({order: sortBy}, {
        skip: isSkipped,
        pollingInterval: 1000,
        refetchOnMountOrArgChange: true
    });
    const {onLoginUser} = useLoginUser(false);

    useEffect(() => {
        dispatch(setToken(cookies.token));
        setIsSkipped(false);
        const timerId = setInterval(() => {
            const user = {
                username: cookies.username,
                password: cookies.password
            }
            onLoginUser(user);
            }, 180000);

        return () => clearInterval(timerId);
    // eslint-disable-next-line
    }, []);

    const slicedLinks = links.slice();

    const setView = () => {
        if(isLoading) {
            return setContent('waiting');
        } else if (isError) {
            return setContent('error');
        } else if(links) {
            return setContent('confirmed', elements);
        } else {
            setContent();
        }
    }
    
    let elements = null;

    if(slicedLinks.length > 0) {
        elements = slicedLinks.map(({id, ...props}) => {
            return <LinkListItem key={id} {...props}/>
        });
    } else {
        elements = (<tr className="link-list__notice">
                        <td colSpan="3" >There is no links yet</td>
                    </tr>);
    }
 
    return (
        <div className='link-list'>
            <LinkFilter/>

            <h2 className='link-list__title'>Your links:</h2>
            <div className='link-list__wrapper'>
                <table className='link-list__table'>
                    <tbody>
                        <tr className='link-list__table__tr'>
                            <td className='link-list__table__td'>Squeezed link</td>
                            <td className='link-list__table__td'>Long link</td>
                            <td className='link-list__table__td'>Visits</td>
                        </tr>
                        {setView()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LinkList;