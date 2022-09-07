import React from 'react';

const LinkListItem = ({short, target, counter}) => {
    let link = '';
    if(target.length > 50) {
        link = `${target.slice(0, 210)}...`;
    } else {
        link = target
    }
    return (
        <tr>
           <td>
                <a href={`http://79.143.31.216/s/${short}`}>
                    {`79.143.31.216/s/${short}`}
                </a>
           </td> 
           <td>
                <a href={`${target}`}>{link}</a>
            </td>
           <td>{counter}</td>
        </tr>
    );
};

export default LinkListItem;