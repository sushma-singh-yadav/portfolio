import React ,{Component } from 'react';
//import {ProgressBar} from 'react-bootstrap';
import { BiSmile,BiListCheck,BiTime } from 'react-icons/bi';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ProgressBar from './ProgressBar';
import axios from 'axios';

class AboutMe extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      htmlWidth:"1",
      cssWidth:"1",
      phpWidth:"1",
      ciWidth:"1",
    };
    this.checkProgress=this.checkProgress.bind(this);
  }
  componentDidMount(){
    this.fetchAbout();
  }
  fetchAbout(){
    console.log('about');
    axios.get('http://localhost:8080/website/website/about').then(function(response){
      console.log(response);
    });
  }
  checkProgress(isVisible) {
  this.setState({
      htmlWidth:"90",
      cssWidth:"80",
      phpWidth:"80",
      ciWidth:"75",
    });
}
	render()
	{
		return (
			<>
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <span>About Me</span>
          <h2>About Me</h2>
        { /* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>*/}
        </div>

        <div className="row">
          <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-lg-8 d-flex flex-column align-items-stretch">
            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Sushma Yadav</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.sushmayadav.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7027091097</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduate</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sushma2219@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <div className="row mt-n4">

                <div className="col-md-6 mt-2 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i style={{color: "#8a1ac2"}}><BiListCheck/></i>
                    <CountUp
                          start={0}
                          end={15}>
                          {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                              </VisibilitySensor>
                          )}
                  </CountUp>
                   <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 mt-2 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i style={{color: "#2cbdee"}}><BiTime/></i>
                     <CountUp
                          start={0}
                          end={2}>
                          {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                              </VisibilitySensor>
                          )}
                  </CountUp>
                  <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

               {/* <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award" style={{color: "#ffb459"}}></i>
                    <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>*/}
              </div>
            </div>

            <div className="skills-content ps-lg-4">
              <VisibilitySensor onChange={this.checkProgress} delayedCall>
              <>
                <ProgressBar title="HTML" percentage={this.state.htmlWidth} width={this.state.htmlWidth+"%"}/>
                <ProgressBar title="CSS" percentage={this.state.cssWidth} width={this.state.cssWidth+"%"}/>
                <ProgressBar title="PHP" percentage={this.state.phpWidth} width={this.state.phpWidth+"%"}/>
                <ProgressBar title="CodeIgniter" percentage={this.state.ciWidth} width={this.state.ciWidth+"%"}/>
              </>
              </VisibilitySensor>
            </div>

          </div>
        </div>

      </div>
    </section>
     </>
			);
	}
}
export default AboutMe;