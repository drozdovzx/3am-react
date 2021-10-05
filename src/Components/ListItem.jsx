import React from 'react';

function ListItem({ imageUrl, name, text }){
    return (
        <li>
            <img src={ imageUrl } alt="qwe"/>
            <div className="listContainerText">
                <div className="listContainerHeader">{ name }</div>
                <div className="listContainerContent">{ text }</div>
                <button className="listContainerBtn">
                    Add to cart
                </button>
            </div>
        </li>
    )
}
export default ListItem;