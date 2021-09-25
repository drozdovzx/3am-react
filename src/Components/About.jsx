import React from 'react';
import Cookies2 from '../images/cookies-2.jpg';

const About = () => {
    return (
        <section className="about size mob-el" id="sec-two">
            <div className="about-con">
                <div className="text-about">
                    <h1> Story about our Bakery</h1>
                    <h2> We tried our best, that anyone could choose favorite cookie. Not just by the taste, but
                        also by the
                        lifestyle. Vegan, healthy, paleo, sugar-free, gluten-free, low-calorie or just traditional
                        cookies,
                        all of that you can find here.</h2>
                </div>
                <img src={Cookies2} alt="cookies-2"/>
            </div>
        </section>
    )
}
export default About;