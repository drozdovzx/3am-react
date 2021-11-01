import React from 'react';
import CartImg from '../images/cart.svg';
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";

function Cart(){

    const {totalPrice} = useSelector(({ cart }) => cart);

    return(
        <HashLink to="/cart">
        <div className="cartBtnContainer">
            <div className="cartBtnImg">
                <img alt="cartImg" src={CartImg}/>
            </div>
            <div className="cartBtnSum">
                <span>
                    {totalPrice} €
                </span>
            </div>
        </div>
        </HashLink>
    )

}
export default Cart;