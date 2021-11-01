import React from 'react';
import Logo from "../images/logo.svg";
import Strips from "../images/Main-menu-strips.svg";
import Cart from "../Components/Cart"
import ToTopBtn from "../Components/ToTopBtn"
import MenuItem from "../Components/MenuItem";
import {Link} from "react-router-dom";
import { LOCALES } from "../i18n/locales";
import {HashLink} from "react-router-hash-link";

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
                        <img alt={languages[i].valueLang} src={"../images/"+a+".svg"}/>
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
                    <img alt={languages[i].code} src={"../images/"+a+".svg"} onClick={handleChange}/>
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
                <HashLink to="/#sec-one">
                    <img className="logo-img" alt="Logo" src={Logo}/>
                </HashLink>
            </button>
            <div className="menu-btn" id="menu-btn">
                <img alt="Strips" src={Strips} className="menu-btn-img"/>
            </div>

            <MenuItem items={[
                'menu_item_1',
                'menu_item_2',
                'menu_item_3',
                'menu_item_4',
                'menu_item_5'
            ]} items1={[
                '/',
                '/',
                '/',
                '/',
                '/list'
            ]} items2={[
                'sec-two',
                'sec-three',
                'sec-four',
                'sec-five',
                ''
            ]}/>

            <div className="cartAndLang">
                <Cart/>
                <div id="langChange" className="lang-change">
                    {langCheck()}
                    <div className="lang-change-window">
                        {langChange()}
                    </div>
                </div>
            </div>
            <ToTopBtn/>

        </section>


    )
}
export default Header;