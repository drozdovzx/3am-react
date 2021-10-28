import React from 'react';
import {FormattedMessage} from "react-intl";


function CartItem({imageUrl, name, text, urlMain}) {
    function removeItem(){
        console.log("item removed tipa")
    }
    return (
        <li>
            <div className="cartListImg">
                <img src={urlMain} alt={urlMain}/>
            </div>
            <div className="cartContainerText">
                <div className="cartContainerHeader"><FormattedMessage id={name}/></div>
                <div className="cartContainerContent"><FormattedMessage id="total_amount"/> -
                    <input type="number" defaultValue={20}/><FormattedMessage id="tk"/>
                </div>
                <div className="cartContainerContent"><FormattedMessage id="total_price"/> - 200€</div>
                <button className="listContainerBtn" onClick={() => removeItem()}>
                    <FormattedMessage id="remove_from_cart"/>
                </button>
            </div>
        </li>
    )
}
export default CartItem;