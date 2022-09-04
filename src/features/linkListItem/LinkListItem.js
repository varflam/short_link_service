import React from 'react';

const LinkListItem = ({short, target, counter}) => {
    return (
        <tr>
           <td>{`79.143.31.216/s/${short}`}</td> 
           <td>{target}</td>
           <td>{counter}</td>
        </tr>
    );
};

export default LinkListItem;