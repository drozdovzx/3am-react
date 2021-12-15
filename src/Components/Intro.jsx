import React from 'react'
import Text from "../images/3amtext.svg";
import {HashLink} from "react-router-hash-link";
import {FormattedMessage} from "react-intl";
import Logo from "../images/logo.svg";


const Intro = () => {
    return (
        <section className="intro size" name="myScrollToElement" id="sec-one">
            {/*<div className="intro-text">
                <img alt="3amtext" src={Text}/>
            </div>*/}
            <div className="introMoto">
                <div>
                    <span>Chewy</span><span>cookies</span>
                </div>
                <div>
                    <span>Fudgy</span><span>brownies</span>
                </div>
            </div>
            <HashLink  to="/list">
                <button className="shop">
                    <span><FormattedMessage id = "order_button"/></span>
                </button>
            </HashLink>
        </section>
    )
}
export default Intro;