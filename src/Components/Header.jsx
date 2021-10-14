import React from 'react';
import Logo from "../images/logo.svg";
import Strips from "../images/Main-menu-strips.svg";
import Eng from "../images/eng.svg";
import Rus from "../images/rus.svg";
import Est from "../images/est.svg";

import ToTopBtn from "../Components/ToTopBtn"
import Item from "../Components/MenuItem";
import {Link} from "react-router-dom";
import { LOCALES } from "../i18n/locales";

const languages = [
    { name: 'Eng', valueLang:"en-US", code: LOCALES.ENGLISH },
    { name: 'Est', valueLang:"et-EE", code: LOCALES.ESTONIAN },
    { name: 'Rus', valueLang:"ru-RU", code: LOCALES.RUSSIAN }
]

const Header = ({ currentLocale, handleChange }) => {
    const langCheck = () => {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].valueLang === currentLocale){
                let a = "../images/Rus.svg"
                return(
                    <button>
                        <img alt="curLang" src={"https://raw.githubusercontent.com/drozdovzx/3am-react/12e6e9c3abcddda45500f696718babd2b3fa3fac/src/images/est.svg"}/>
                    </button>
                )
            }
        }
    }
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

                {langCheck()}

                {languages.map(({name, code}) => (

                    <button id={code} key={code} value={code}>
                        <img alt={code} src={Eng} onClick={handleChange}/>
                    </button>
                ))}


                {/*
                <select id="language" onChange={handleChange} value={currentLocale}>
                    {languages.map(({name, code}) => (
                        <option key={name} value={code}>
                            <img alt="preloader1" src={{name}}/>
                        </option>
                    ))}
                </select>

                <div className="lang-change-flex">
                    <div className="current-lang">
                        <img alt="preloader1" src={Eng}/>
                    </div>
                </div>
                <div className="lang-change-window">
                    <button className="svg-lang" onClick={handleChange} value={currentLocale} value={LOCALES.RUSSIAN}>
                        <img alt="preloader1" src={Rus}/>
                    </button>
                    <button className="svg-lang" onClick={handleChange} value={currentLocale} value={LOCALES.ESTONIAN}>
                        <img alt="preloader1" src={Est}/>
                    </button>
                </div>*/}
            </div>

            {/*<ToTopBtn />*/}

        </section>


    )
}
export default Header;