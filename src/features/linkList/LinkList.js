import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetStatisticsQuery } from '../../api/apiSlice';
import LinkListItem from '../linkListItem/LinkListItem';
import { setSortBy } from '../../store/slices/linksSlice';

const LinkList = () => {
    const dispatch = useDispatch();
    const {sortBy} = useSelector(state => state.links);
    const [activeFilter, setActiveFilter] = useState('asc_short');
    const {data: links = []} = useGetStatisticsQuery({order: sortBy}, {
        pollingInterval: 0,
        refetchOnMountOrArgChange: true
    });
    const slicedLinks = links.slice();

    const elements = slicedLinks.map(({id, ...props}) => {
        return <LinkListItem key={id} {...props}/>
    });


    const filtersArray = ['asc_short', 'asc_target', 'asc_counter', 'desc_short', 'desc_target', 'desc_counter'];

    const filters = filtersArray.map((filter) => {

        const handleChange = (e) => {
            const {value} = e.target;
            setActiveFilter(value);
        }

        let label = '';
        switch(filter) {
            case 'asc_short':
                label = 'Ascending order by squeezed link';
                break;
            case 'asc_target':
                label = 'Ascending order by long link';
                break;
            case 'asc_counter':
                label = 'Ascending order by visits';
                break;
            case 'desc_short':
                label = 'Descending order by squeezed link';
                break;
            case 'desc_target':
                label = 'Descending order by long link';
                break;
            case 'desc_counter':
                label = 'Descending order by visits';
                break;
            default:
                label = '';
                break;
        }

        return(
            <div   
                key={filter} 
                className="page__link-list__sort__form__group">
                        <label htmlFor={filter}>{label}</label>
                        <input 
                            type="radio" 
                            id={filter} 
                            name="filter"
                            value={filter}
                            checked={activeFilter === filter}
                            onChange={(e) => handleChange(e)}/>
            </div>
        )
    });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(setSortBy([activeFilter]));
    }
 
    return (
        <div className='page__link-list'>
            <div className='page__link-list__sort'>
                <p>Sort by:</p>
                <form 
                    className="page__link-list__sort__form"
                    onSubmit={e => onSubmit(e)}>
                    {filters}
                    <button type="submit" className='form__button form__button_link-list'>Sort</button>
                </form>

            </div>    

            <h2 className='page__title'>Your links:</h2>
            <table className='page__link-list__table'>
                <tbody>
                    <tr>
                        <td>Squeezed link</td>
                        <td>Long link</td>
                        <td>Visits</td>
                    </tr>
                    {elements}
                </tbody>
            </table>
        </div>
    );
};

export default LinkList;