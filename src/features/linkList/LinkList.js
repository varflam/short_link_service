import React from 'react';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import LinkListItem from '../linkListItem/LinkListItem';

const LinkList = () => {
    const {data: links = []} = useGetStatisticsQuery(['']);

    const slicedLinks = links.slice();

    const elements = slicedLinks.map(({id, ...props}) => {
        return <LinkListItem key={id} {...props}/>
    });
 
    return (
        <table>
            <tbody>
                {elements}
            </tbody>
        </table>
    );
};

export default LinkList;