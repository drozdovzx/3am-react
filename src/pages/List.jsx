import React from 'react';
import {} from '../Components/';
import { ListItem } from '../Components/';

function List({ items }) {
    return (
        <div className="listContainerMain">
            <div className="listContainerName">List of the cookies</div>
            <ul className="listContainer">
                {items.map(obj => (
                    <ListItem key={obj.id} {...obj} />
                ))
                }
            </ul>
        </div>
    );
}

export default List;