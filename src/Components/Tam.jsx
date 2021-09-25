import React from 'react';
import Tom from "../images/tom.jpg";
import Fara from "../images/fara.jpg";
import Sass from "../images/sass.jpg";
import Mark from "../images/mark.jpg";

const Tam = () => {
    return (
        <section className="tam size mob-el" id="sec-five">
            <span className="our-team">We are 3AM</span>
            <div className="team" id="tom">
                <img src={Tom} alt={"tom"}/>
                <h1>Artjom</h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Our great leader and ideology creator. Main chief and just a good man.</a>
            </div>

            <div className="team" id="fara">
                <img src={Fara} alt={"fara"}/>
                <h1>Artjom</h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Without him our team is not our team. Creative director and corrector.</a>
            </div>

            <div className="team" id="sass">
                <img src={Sass} alt={"sass"}/>
                <h1>Aleksandr</h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>IT-guy, who love cookies and beautiful girls.</a>
            </div>

            <div className="team" id="mark">
                <img src={Mark} alt={"mark"}/>
                <h1>Mark</h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Logistic guy, who have Camry 3.5 (not 3.5). PS. Mark zaebal buhatj na kazdih vihodnih</a>
            </div>

        </section>
    )
}
export default Tam;