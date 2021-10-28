import React from 'react';
import CartImg from '../images/cart.svg';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Cart(){

    const {totalPrice} = useSelector(({ cart }) => cart);

    return(
        <Link to="/cart">
        <div className="cartBtnContainer">
            <div className="cartBtnImg">
                <img alt="cartImg" src={CartImg}/>
            </div>
            <div className="cartBtnSum">
                {totalPrice} €
            </div>
        </div>
        </Link>
    )

}
export default Cart;