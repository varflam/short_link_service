import React from 'react';

import './linkListItem.sass';

const LinkListItem = ({short, target, counter}) => {
    let link = '';
    if(target.length > 50) {
        link = `${target.slice(0, 30)}...`;
    } else {
        link = target
    }
    return (
        <tr className='link-list__table__tr'>
           <td className='link-list__table__td'>
                <a 
                    className='link-list__table__link' 
                    href={`http://79.143.31.216/s/${short}`}>
                    {`79.143.31.216/s/${short}`}
                </a>
           </td> 
           <td className='link-list__table__td'>
                <a 
                    className='link-list__table__link'
                    href={`${target}`}>{link}</a>
            </td>
           <td className='link-list__table__td'>{counter}</td>
        </tr>
    );
};

export default LinkListItem;