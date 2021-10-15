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
    { name: 'eng', valueLang:"en-US", code: LOCALES.ENGLISH },
    { name: 'est', valueLang:"et-EE", code: LOCALES.ESTONIAN },
    { name: 'rus', valueLang:"ru-RU", code: LOCALES.RUSSIAN }
]

const Header = ({ currentLocale, handleChange }) => {
    const langCheck = () => {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].valueLang === currentLocale){
                let a = languages[i].name;
                return(
                    <button className="langBtn">
                        <img alt={languages[i].valueLang} src={"https://raw.githubusercontent.com/drozdovzx/3am-react/12e6e9c3abcddda45500f696718babd2b3fa3fac/src/images/"+a+".svg"}/>
                    </button>
                )
            }
        }
    }
    const langChange = () => {
        const dataCollection = [];
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].valueLang !== currentLocale){
                let a = languages[i].name;
                dataCollection.push(
                <button id={languages[i].code} className="langBtn" key={languages[i].code} value={languages[i].code}>
                    <img alt={languages[i].code} src={"https://raw.githubusercontent.com/drozdovzx/3am-react/12e6e9c3abcddda45500f696718babd2b3fa3fac/src/images/"+a+".svg"} onClick={handleChange}/>
                </button>
                )
            }
        }
        return dataCollection;
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
                <div className="lang-change-window">
                    {langChange()}
                </div>
            </div>

            <ToTopBtn />

        </section>


    )
}
export default Header;