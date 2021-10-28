import React from 'react';
import {} from '../Components/';
import { ListItem } from '../Components/';
import {FormattedMessage} from "react-intl";
import {useDispatch} from "react-redux";

function List({ items }) {
    const dispatch = useDispatch();
    const addToCart = (obj) => {
        console.log(obj);
    };
    return (
        <div className="listContainerMain">
            <span className="listContainerTitle"><FormattedMessage id="list_name_1"/></span>
            <ul className="listContainer">
                {items.map(obj => (
                    <ListItem onAddCookie={addToCart} key={obj.id} {...obj} />
                ))
                }
            </ul>
        </div>
    );
}

export default List;