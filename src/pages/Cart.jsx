import React from 'react';
import {FormattedMessage} from "react-intl";
import CartItem from "../Components/CartItem";

function Cart({ items }) {
    return(
        <div className="cartContainer">
            <div className="cartInnerContainer">
                <span><FormattedMessage id="cart_1"/></span>
                <ul>
                    {items.map(obj => (
                        <CartItem key={obj.id} {...obj} />
                    ))
                    }
                </ul>
                <div className="cartOrder">
                    <button className="listContainerBtn"><FormattedMessage id="cart_order"/></button>
                </div>
            </div>
        </div>
    );
}
export default Cart;