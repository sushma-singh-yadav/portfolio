import React ,{Component} from 'react';
import Home from './views/Home';
import Head from './views/Head';
import AboutMe from './views/AboutMe';
import Service from './views/Service';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';
import Testimonials from './views/Testimonials';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
import Footer from './views/Footer';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
class Website extends Component{
    render()
    {
        return (
            <>
                <Head/>
                <Home/>
                <main id="main">
                    <AboutMe/>
                    <Resume/>
                    <Service/>
                    <Testimonials/>
                    <Portfolio/>
                    <Pricing/>
                    <Contact/>
                    <Footer/>
                </main>
            </>
        );
    }
}
export default Website;