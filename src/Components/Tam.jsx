import React from 'react';
import Tom from "../images/tom.jpg";
import Fara from "../images/fara.jpg";
import Sass from "../images/sass.jpg";
import Mark from "../images/mark.jpg";
import {FormattedMessage} from "react-intl";


const Tam = () => {
    return (
        <section className="tam size mob-el" id="sec-five">
            <span className="our-team"><FormattedMessage id="tam_title"/></span>
            <div className="team" id="tom">
                <img src={Tom} alt={"tom"}/>
                <h1><FormattedMessage id="tam_name_1"/></h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><FormattedMessage id="tam_text_1"/></a>
            </div>

            <div className="team" id="fara">
                <img src={Fara} alt={"fara"}/>
                <h1><FormattedMessage id="tam_name_2"/></h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><FormattedMessage id="tam_text_2"/></a>
            </div>

            <div className="team" id="sass">
                <img src={Sass} alt={"sass"}/>
                <h1><FormattedMessage id="tam_name_3"/></h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><FormattedMessage id="tam_text_3"/></a>
            </div>

            <div className="team" id="mark">
                <img src={Mark} alt={"mark"}/>
                <h1><FormattedMessage id="tam_name_4"/></h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><FormattedMessage id="tam_text_4"/></a>
            </div>

        </section>
    )
}
export default Tam;