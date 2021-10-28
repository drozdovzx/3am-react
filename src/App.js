import React from 'react';
import {Footer, Header} from './Components/';
import {Home, List, Cart} from "./pages";
import {Route} from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {
    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }
    const [cookies, setCookies] = React.useState([]);
    const [currentLocale, setCurrentLocale] = React.useState(getInitialLocale());
    const handleChange = ({ target: { alt } }) => {
        setCurrentLocale(alt);
        localStorage.setItem('locale', alt)
    }

    React.useState(() => {
        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
            setCookies(json.cookies);
        });
    }, [])
    return (
        <IntlProvider messages={messages[getInitialLocale()]} locale={getInitialLocale()} defaultLocale='LOCALES.ENGLISH'>
            <Header currentLocale={currentLocale} handleChange={handleChange}/>
            <div className="back">
                    <Route exact path='/main' component={Home}/>
                    <Route exact path='/list' render={() => <List items={cookies}/>}/>
                    <Route exact path='/cart' render={() => <Cart items={cookies}/>}/>
                    <Footer/>
            </div>
        </IntlProvider>

    );
}

export default App;
