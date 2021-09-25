import React from 'react';
import Logo from "../images/logo.svg";
import Strips from "../images/Main-menu-strips.svg";
import Eng from "../images/eng.svg";
import Rus from "../images/rus.svg";
import Est from "../images/est.svg";

const Header = () => {
    return (
        <section id="myHeader" className="header" >
            <div id="white-back"/>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="logo" id="logo">
                <img className="logo-img" alt="Logo" src={Logo}/>
            </a>
            <div className="menu-btn" id="menu-btn">
                <img alt="Strips" src={Strips} className="menu-btn-img"/>
            </div>
            <nav className="nav" id="nav-main">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" id="nav-1">About</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" id="nav-2">Cookies</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" id="nav-3">Two ways</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" id="nav-4">Team</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" id="nav-5">Order</a>
            </nav>
            <div id="langChange" className="lang-change">
                <div className="lang-change-flex">
                    <div className="current-lang">
                        <img alt="preloader1" src={Eng}/>
                    </div>
                </div>
                <div className="lang-change-window">
                    <button className="svg-lang">
                        <img alt="preloader1" src={Rus}/>
                    </button>
                    <button className="svg-lang">
                        <img alt="preloader1" src={Est}/>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header;