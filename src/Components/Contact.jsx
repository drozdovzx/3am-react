import Pech1 from "../images/pechenje3-01.jpg";
import Pech2 from "../images/pechenje3-20.jpg";
import Pech3 from "../images/pechenje3-12.jpg";
import Pech4 from "../images/pechenje3-19.jpg";

export default function Contact() {
    let a = 0;
    let arr1 = window.document.getElementsByClassName("active1");
    let arr2 = window.document.getElementsByClassName("active2");

    const toLeft = () => {
        a = a - 1;
        for (let i = 0; i < arr1.length; i++) {
            arr1[i].className = "active1 out";
            arr2[i].className = "active2";
        }
        if (a === arr1.length - 1){
            arr1[a].className = "active1";
            arr1[0].className = "active1 next";
            arr2[0].className = "active2 text-down";
        } else if (a < arr1.length - 1 && a > -1){
            arr1[a].className = "active1";
            arr1[a+1].className = "active1 next";
            arr2[a].className = "active2 text-down";
        } else {
            a = arr1.length - 1;
            arr1[a].className = "active1";
            arr1[0].className = "active1 next";
            arr2[a].className = "active2 text-down";
        }
    };
    const toRight = () => {
        a = a + 1;
        for (let i = 0; i < arr1.length; i++) {
            arr1[i].className = "active1 out";
            arr2[i].className = "active2";
        }
        if (a === arr1.length - 1){
            arr1[a].className = "active1";
            arr1[0].className = "active1 next";
            arr2[a].className = "active2 text-down";
        } else if (a < arr1.length - 1 && a > 0){
            arr1[a].className = "active1";
            arr1[a+1].className = "active1 next";
            arr2[a].className = "active2 text-down";
        } else {
            a = 0;
            arr1[a].className = "active1";
            arr1[a+1].className = "active1 next";
            arr2[a].className = "active2 text-down";
        }
    };

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

                <button className="btn-left btn-both" onClick={toLeft}>
                    <span>&#10094;</span>
                </button>
                <button className="btn-right btn-both" onClick={toRight}>
                    <span>&#10095;</span>
                </button>
            </div>

        </section>
    )
}