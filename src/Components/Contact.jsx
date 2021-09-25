import React from 'react';
import Pech1 from "../images/pechenje3-01.jpg";
import Pech2 from "../images/pechenje3-20.jpg";
import Pech3 from "../images/pechenje3-12.jpg";
import Pech4 from "../images/pechenje3-19.jpg";

const Contact = () => {
    return (
        <section className="contact size mob-el" id="sec-three">
            <div className="slider-con">
                <div className="active1">
                    <img alt="Cookie1" rel="preload" src={Pech1}/>
                </div>
                <div className="active1 next">
                    <img alt="Cookie2" rel="preload" src={Pech2}/>
                </div>
                <div className="active1 out">
                    <img alt="Cookie3" rel="preload" src={Pech3}/>
                </div>
                <div className="active1 out">
                    <img alt="Cookie4" rel="preload" src={Pech4}/>
                </div>

                <div className="active2 text-down">
                    <h1>First cookie</h1>
                    <span>
                Loren ipsum blalbalbalblabl adbldabfa asdgv safdv
                asdv asdf sdaf sdfas a sdafasdvcasd va asdfg asdf
                asdafasdfsda asd fasd sadf asdf
            </span>
                </div>
                <div className="active2">
                    <h1>Second cookie</h1>
                    <span>
                Loren ipsum blalbalbalblabl adbldabfa asdgv safdv
                asdv asdf sdaf sdfas a sdafasdvcasd va asdfg asdf
                asdafasdfsda asd fasd sadf asdf
            </span>
                </div>
                <div className="active2">
                    <h1>Third cookie</h1>
                    <span>
                Loren ipsum blalbalbalblabl adbldabfa asdgv safdv
                asdv asdf sdaf sdfas a sdafasdvcasd va asdfg asdf
                asdafasdfsda asd fasd sadf asdf
            </span>
                </div>
                <div className="active2">
                    <h1>Four cookie</h1>
                    <span>
                Loren ipsum blalbalbalblabl adbldabfa asdgv safdv
                asdv asdf sdaf sdfas a sdafasdvcasd va asdfg asdf
                asdafasdfsda asd fasd sadf asdf
            </span>
                </div>

                <button className="btn-left btn-both">
                    <span>&#10094;</span>
                </button>
                <button className="btn-right btn-both">
                    <span>&#10095;</span>
                </button>
            </div>

        </section>
    )
}
export default Contact;