import React ,{Component} from 'react';

class Head extends Component{
  constructor(props){
    super(props);
    this.state={
      headerClassScroll:'',
    }
  }
  componentDidMount(){
   window.addEventListener('scroll', () => {
           let activeClass = 'header-scrolled';
           if(window.scrollY === 0){
               activeClass = '';
           }
           this.setState({ headerClassScroll:activeClass });
        });
  }
	render()
	{
		return (
			<>
  <header id="header" className={"fixed-top d-flex justify-content-center align-items-center header-transparent " + this.state.headerClassScroll}>

    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </header>
  
 </>
			);
	}
}
export default Head;