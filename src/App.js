import Intro from './Components/Intro';
import About from './Components/About';
import Contact from './Components/Contact';
import TwoWays from './Components/TwoWays';
import Tam from './Components/Tam';
import Footer from './Components/Footer';
import Header from "./Components/Header";

function App() {
  return (
        <div className="back">

            <button id="topBtn" title="Go to top">
                <img alt="preloader1" src="images/toTopBtn.svg"/>
            </button>

            <Header />
            <Intro />
            <About />
            <Contact />
            <TwoWays />
            <Tam />
            <Footer />

        </div>
  );
}

export default App;
