import React from 'react';
import { Intro, About, Contact, TwoWays, Tam } from '../Components/';
import {useDispatch} from "react-redux";

function Home() {

    return(
        <div>
            <Intro />
            <About />
            <Contact />
            <TwoWays />
            <Tam />
        </div>
    );
}
export default Home;