import React ,{Component} from 'react';

class Head extends Component{
  constructor(props){
    super(props);
    this.state={
      headerClassScroll:'',
      isActive: 'hero'
    }
    this.handleClickMethod = this.handleClickMethod.bind(this);
  }
  handleClickMethod(menuType){
    console.log(this.state.isActive);
    this.setState({ isActive:menuType });
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
        <li><a className={"nav-link scrollto " + (this.state.isActive == 'hero' ? 'active' : '')} href="#hero" onClick={(event) => this.handleClickMethod('hero')}>Home</a></li>
        <li><a className={"nav-link scrollto " + (this.state.isActive == 'about' ? 'active' : '')} href="#about" onClick={(event) => this.handleClickMethod('about')}>About</a></li>
        <li><a className={"nav-link scrollto " + (this.state.isActive == 'resume' ? 'active' : '')} href="#resume" onClick={(event) => this.handleClickMethod('resume')}>Resume</a></li>
        <li><a className={"nav-link scrollto " + (this.state.isActive == 'portfolio' ? 'active' : '')} href="#portfolio" onClick={(event) => this.handleClickMethod('portfolio')}>Portfolio</a></li>
        
        <li><a className={"nav-link scrollto " + (this.state.isActive == 'contact' ? 'active' : '')} href="#contact" onClick={(event) => this.handleClickMethod('contact')}>Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </header>
  
 </>
			);
	}
}
export default Head;