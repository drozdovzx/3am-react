import React from 'react'
import Text from "../images/3amtext.svg";
import { Link } from 'react-router-dom'
import {FormattedMessage} from "react-intl";

const Intro = () => {
    return (
        <section className="intro size" name="myScrollToElement" id="sec-one">
            <div className="intro-text">
                <img alt="3amtext" src={Text}/>
            </div>
            <Link to="/list">
                <button className="shop">
                    <span><FormattedMessage id = "order_button"/></span>
                </button>
            </Link>
        </section>
    )
}
export default Intro;