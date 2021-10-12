import React from 'react';
import Logo from "../images/logo.svg";
import Strips from "../images/Main-menu-strips.svg";
import Eng from "../images/eng.svg";
import Rus from "../images/rus.svg";
import Est from "../images/est.svg";

import ToTopBtn from "../Components/ToTopBtn"
import Item from "../Components/MenuItem";
import {Link} from "react-router-dom";

const Header = () => {
    return (

        <section id="myHeader" className="header" >
            <div id="white-back"/>
            <button className="logo" id="logo">
                <Link to="/">
                    <img className="logo-img" alt="Logo" src={Logo}/>
                </Link>
            </button>
            <div className="menu-btn" id="menu-btn">
                <img alt="Strips" src={Strips} className="menu-btn-img"/>
            </div>

            <Item items={[
                'menu_item_1',
                'menu_item_2',
                'menu_item_3',
                'menu_item_4',
                'menu_item_5'
            ]}/>

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

            <ToTopBtn />

        </section>


    )
}
export default Header;