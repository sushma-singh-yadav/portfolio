import React ,{Component} from 'react';
import { BiChevronDown } from 'react-icons/bi';

class Home extends Component{
	render()
	{
		return (
			<>
      <section id="hero">
        <div className="hero-container">
          <h1>Sushma Yadav</h1>
          <h2>I'm a Professional Software Developer</h2>
          <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i><BiChevronDown/></i><i className="bx bx-chevron-down"></i></a>
        </div>
      </section>
     </>
			);
	}
}
export default Home;