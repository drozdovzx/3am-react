import React from 'react'
import Text from "../images/3amtext.svg";


const Intro = () => {
    return (
        <section className="intro size" id="sec-one">
            <div className="intro-text">
                <img alt="3amtext" src={Text}/>
            </div>

            <button className="shop">
                <span>Order now</span>
            </button>
        </section>
    )
}
export default Intro;