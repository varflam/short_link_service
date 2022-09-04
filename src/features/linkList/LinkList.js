import React from 'react';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import LinkListItem from '../linkListItem/LinkListItem';

const LinkList = () => {
    const {data: links = []} = useGetStatisticsQuery([''], {
        pollingInterval: 0
    });

    const slicedLinks = links.slice();

    const elements = slicedLinks.map(({id, ...props}) => {
        return <LinkListItem key={id} {...props}/>
    });
 
    return (
        <div className='page__link-list'>
            <div className='page__link-list__sort'>
                <p>Sort by:</p>
                <form className="page__link-list__sort__form">
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="asc_short">Ascending order by squeezed link</label>
                        <input type="checkbox" id="asc_short" name="asc_short"/>
                    </div>
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="asc_target">Ascending order by long link</label>
                        <input type="checkbox" id="asc_target" name="asc_target"/>
                    </div>
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="asc_counter">Ascending order by visits</label>
                        <input type="checkbox" id="asc_counter" name="asc_counter"/>
                    </div>
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="desc_short">Descending order by squeezed link</label>
                        <input type="checkbox" id="desc_short" name="desc_short"/></div>
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="desc_target">Descending order by long link</label>
                        <input type="checkbox" id="desc_target" name="desc_target"/></div>
                    <div className="page__link-list__sort__form__group">
                        <label htmlFor="desc_counter">Descending order by visits</label>
                        <input type="checkbox" id="desc_counter" name="desc_counter"/></div>
                    <button type="submit" className='form__button form__button_link-list'>Sort</button>
                </form>

            </div>    

            <h2 className='page__title'>Your links:</h2>
            <table className='page__link-list__table'>
                <tr>
                    <td>Squeezed link</td>
                    <td>Long link</td>
                    <td>Visits</td>
                </tr>
                {elements}
            </table>
        </div>
    );
};

export default LinkList;