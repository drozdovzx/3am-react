import React from 'react';
import Cookies2 from '../images/cookies-2.jpg';
import {FormattedMessage} from "react-intl";

const About = () => {
    return (
        <section className="about size mob-el" id="sec-two">
            <div className="about-con">
                <div className="text-about">
                    <h1><FormattedMessage id = "about_1"/></h1>
                    <h2><FormattedMessage id = "about_2"/></h2>
                </div>
                <img src={Cookies2} alt="cookies-2"/>
            </div>
        </section>
    )
}
export default About;