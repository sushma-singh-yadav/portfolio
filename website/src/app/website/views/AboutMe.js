import React ,{Component } from 'react';
//import {ProgressBar} from 'react-bootstrap';
import { BiSmile,BiListCheck,BiTime } from 'react-icons/bi';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import "animate.css";

class AboutMe extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      laravelWidth:"1",
      htmlWidth:"1",
      cssWidth:"1",
      phpWidth:"1",
      ciWidth:"1",
      vueWidth:"1",
      jqueryWidth:"1",
      mysqlWidth:"1",
      gitWidth:"1",
      age:0,
    };
    this.checkProgress=this.checkProgress.bind(this);
  }
  componentDidMount(){
    //this.fetchAbout();
    this.calculateAge();
  }
  calculateAge(){
    var dob = new Date("02/19/1996");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var ageCal = Math.abs(year - 1970);  

    this.setState({age:ageCal});
  }
  // fetchAbout(){
  //   console.log('about');
  //   axios.get('http://localhost:8080/website/website/about').then(function(response){
  //     console.log(response);
  //   });
  // }
  checkProgress(isVisible) {
  this.setState({
      laravelWidth:"75",
      htmlWidth:"90",
      cssWidth:"80",
      phpWidth:"80",
      ciWidth:"75",
      vueWidth:"60",
      jqueryWidth:"70",
      mysqlWidth:"75",
      gitWidth:"60",
    });
}
	render()
	{
		return (
			<>
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <span className='animate__jello'>About Me</span>
          <h2 className='animate__heartBeat'>About Me</h2>
        { /* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>*/}
        </div>

        <div className="row">
          <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start animate__slideInLeft"></div>
          <div className="col-lg-8 d-flex flex-column align-items-stretch">
            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-lg-6 mt-5">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Sushma Yadav</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.sushmayadav.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7027091097</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 animate__slideInRight mt-5">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{this.state.age}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduate (B.tech CSE)</span></li>
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
                          end={18}>
                          {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                              </VisibilitySensor>
                          )}
                  </CountUp>
                   <p><strong>Projects</strong> Team work / Brainstorming / Leadership</p>
                  </div>
                </div>

                <div className="col-md-6 mt-2 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i style={{color: "#2cbdee"}}><BiTime/></i>
                     <CountUp
                          start={0}
                          end={4}>
                          {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                              </VisibilitySensor>
                          )}
                  </CountUp>
                  <p><strong>Years of experience</strong> Delivered Multiple projects / Creative Work / Managed Team</p>
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

            {/* <div className="skills-content ps-lg-4">
              <VisibilitySensor onChange={this.checkProgress} delayedCall>
              <>
                <ProgressBar title="Laravel" percentage={this.state.laravelWidth} width={this.state.laravelWidth+"%"}/>
                <ProgressBar title="Vue JS" percentage={this.state.vueWidth} width={this.state.vueWidth+"%"}/>
                <ProgressBar title="HTML, CSS" percentage={this.state.htmlWidth} width={this.state.cssWidth+"%"}/>
                <ProgressBar title="jQuery" percentage={this.state.jqueryWidth} width={this.state.jqueryWidth+"%"}/>
                <ProgressBar title="PHP, CodeIgniter" percentage={this.state.ciWidth} width={this.state.ciWidth+"%"}/>
                <ProgressBar title="MySQL" percentage={this.state.mysqlWidth} width={this.state.mysqlWidth+"%"}/>
                <ProgressBar title="Git" percentage={this.state.gitWidth} width={this.state.gitWidth+"%"}/>
              </>
              </VisibilitySensor>
            </div> */}

          </div>
        </div>

      </div>
    </section>
     </>
			);
	}
}
export default AboutMe;