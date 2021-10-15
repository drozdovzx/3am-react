import React from 'react';
import {FormattedMessage} from "react-intl";


function ListItem({ imageUrl, name, text }){
    return (
        <li>
            <img src={ imageUrl } alt="qwe"/>
            <div className="listContainerText">
                <div className="listContainerHeader"><FormattedMessage id={ name }/></div>
                <div className="listContainerContent"><FormattedMessage id={ text }/></div>
                <button className="listContainerBtn">
                    <FormattedMessage id="add_to_cart"/>
                </button>
            </div>
        </li>
    )
}
export default ListItem;