import React from 'react';

const LinkListItem = ({short, target, counter}) => {
    return (
        <tr>
           <td>
                <a href={`https://79.143.31.216/s/${short}`}>{`79.143.31.216/s/${short}`}</a>
           </td> 
           <td>
                <a href={`https://${target}`}>{target}</a>
            </td>
           <td>{counter}</td>
        </tr>
    );
};

export default LinkListItem;