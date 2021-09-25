import React from 'react';
import Pechenje from "../images/pechenje-pechenje.jpg";
import Testo from "../images/pechenje-testo.jpg";

const TwoWays = () => {
    return (
        <section className="two-ways size mob-el" id="sec-four">
            <div className="two-ways-sub">
                <div className="way active-way-1" id="way1">
                    <div className="gray-scale active-way" id="way1-1"/>
                    <img alt="pe" src={Pechenje}/>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Buy a cookie</a>
                    <span>Ofigennij text about our ofigennije pechenki i eshe o tom how much pleasure you will get by
                    eating our ofigennije pechenjki with caramel or shokoladnimi kusochkami ili peanute or shpinat or mis iganes </span>
                </div>
                <div />
                <div className="way" id="way2">
                    <div className="gray-scale" id="way2-1"/>
                    <img alt="pe" src={Testo}/>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Make a cookie</a>
                    <span>Kak zdorovo bilo bi ispech pechenjki, no mne lenj i poetomu pozvonju etim krasavchikam, chto bi oni
                privezli mne etih gorjachih francuzskih bulochek i v6pili chaju</span>
                </div>
            </div>
        </section>
    )
}
export default TwoWays;