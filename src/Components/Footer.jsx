import React from 'react';
import Inst from "../images/inst.svg";

const Footer = () => {
    return (
        <section className="footer">
            <button className="soc-link"
            >
                <img alt="preloader1" src={Inst}/>
            </button>
            <div className="rights">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <span>Created and designed by <a href="#">Aleksandr Drozdov</a> 2021</span>
            </div>
        </section>
    )
}
export default Footer;