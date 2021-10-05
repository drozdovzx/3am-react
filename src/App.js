import React from 'react';
import { Footer, Header } from './Components/';
import { Home, List, Cart } from "./pages";
import { Route } from 'react-router-dom';

function App() {

    const[cookies, setCookies] = React.useState([]);
    React.useState(() =>{

        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
            setCookies(json.cookies);
        });

    },[])

    console.log(cookies);
    return (
        <div className="back">

            <Header />
            <Route exact path='/' component={Home}/>
            <Route exact path='/list' render={() => <List items={cookies} />}/>
            <Route exact path='/cart' component={Cart}/>
            <Footer />

        </div>
    );
}

export default App;
