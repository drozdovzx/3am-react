import React from 'react';
import {Footer, Header} from './Components/';
import {Home, List, Cart} from "./pages";
import {Route} from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {
    const locale = LOCALES.ENGLISH
    const [cookies, setCookies] = React.useState([]);
    React.useState(() => {

        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
            setCookies(json.cookies);
        });

    }, [])

    console.log(cookies);
    return (
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale='LOCALES.ENGLISH'>
            <div className="back">
                <Header/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/list' render={() => <List items={cookies}/>}/>
                <Route exact path='/cart' component={Cart}/>
                <Footer/>
            </div>
        </IntlProvider>

    );
}

export default App;
