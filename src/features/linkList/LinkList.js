import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import LinkListItem from '../linkListItem/LinkListItem';
import LinkFilter from '../linkFilter/LinkFilter';
import useLoginUser from '../../hooks/useLoginUser';
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
    const {username, password} = useSelector(state => state.user);
    const {
        data: links = [],
        isLoading,
        isError
        } = useGetStatisticsQuery({order: sortBy}, {
        pollingInterval: 1000,
        refetchOnMountOrArgChange: true
    });
    const {onLoginUser} = useLoginUser(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            const user = {
                username,
                password
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
        } else if(links) {
            return setContent('confirmed', elements);
        } else if (isError) {
            return setContent('error');
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