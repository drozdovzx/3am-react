import React from 'react';
import {} from '../Components/';
import { ListItem } from '../Components/';

function List({ items }) {
    return (
        <ul className="listContainer">
            {items.map(obj => (
                <ListItem key={obj.id} {...obj} />
            ))
            }
        </ul>

    );
}

export default List;