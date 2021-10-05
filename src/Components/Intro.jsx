import React from 'react'
import Text from "../images/3amtext.svg";
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section className="intro size" id="sec-one">
            <div className="intro-text">
                <img alt="3amtext" src={Text}/>
            </div>
            <Link to="/list">
                <button className="shop">
                    <span>Order now</span>
                </button>
            </Link>
        </section>
    )
}
export default Intro;