import React from 'react';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import LinkListItem from '../linkListItem/LinkListItem';

const LinkList = () => {
    const {data: links = []} = useGetStatisticsQuery([''], {
        pollingInterval: 2000
    });

    const slicedLinks = links.slice();

    const elements = slicedLinks.map(({id, ...props}) => {
        return <LinkListItem key={id} {...props}/>
    });
 
    return (
        <>
            <p>Sort by:</p>
            <form>
                <label htmlFor="asc_short">Ascending order by squeezed link</label>
                <input type="checkbox" id="asc_short" name="asc_short"/>
                <label htmlFor="asc_target">Ascending order by long link</label>
                <input type="checkbox" id="asc_target" name="asc_target"/>
                <label htmlFor="asc_counter">Ascending order by visits</label>
                <input type="checkbox" id="asc_counter" name="asc_counter"/>
                <label htmlFor="desc_short">Descending order by squeezed link</label>
                <input type="checkbox" id="desc_short" name="desc_short"/>
                <label htmlFor="desc_target">Descending order by long link</label>
                <input type="checkbox" id="desc_target" name="desc_target"/>
                <label htmlFor="desc_counter">Descending order by visits</label>
                <input type="checkbox" id="desc_counter" name="desc_counter"/>
                <button type="submit">Sort</button>
            </form>

            <table>
                <tr>
                    <td>Squeezed link</td>
                    <td>Long link</td>
                    <td>Visits</td>
                </tr>
                {elements}
            </table>
        </>
    );
};

export default LinkList;