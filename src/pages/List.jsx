import React from 'react';
import {} from '../Components/';
import { ListItem } from '../Components/';
import {FormattedMessage} from "react-intl";

function List({ items }) {
    return (
        <div className="listContainerMain">
            <span className="listContainerTitle"><FormattedMessage id="list_name_1"/></span>
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