import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../../store/slices/linksSlice';

import './linkFilter.sass';

const LinkFilter = () => {
    const dispatch = useDispatch();
    const [activeFilter, setActiveFilter] = useState('asc_short');

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
                className="link-list__filter__form__group">
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
        <div className='link-list__filter'>
            <p>Sort by:</p>
            <form 
                className="link-list__filter__form"
                onSubmit={e => onSubmit(e)}>
                {filters}
                <button type="submit" className='form__button form__button_filter'>Sort</button>
            </form>
        </div>    
    );
};

export default LinkFilter;