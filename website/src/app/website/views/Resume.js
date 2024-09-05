import React ,{Component} from 'react';

import VisibilitySensor from 'react-visibility-sensor';
import ProgressBar from './ProgressBar';

class Resume extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      experience:0,
      laravelWidth:"1",
      htmlWidth:"1",
      cssWidth:"1",
      phpWidth:"1",
      ciWidth:"1",
      vueWidth:"1",
      jqueryWidth:"1",
      mysqlWidth:"1",
      gitWidth:"1",
    };
    this.checkProgress=this.checkProgress.bind(this);
  }
  componentDidMount(){
    //this.fetchAbout();
    this.calculateYear();
  }
   calculateYear() { // birthday is a date
    const d = new Date();
    let year = d.getFullYear();

    var experience = year - '2019';

    // var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.setState({experience:experience});
  }
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
          <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <span>My Resume</span>
          <h2>My Resume</h2>
          {/*<p></p>*/}
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Sushma Yadav</h4>
              <p><em>Innovative and deadline-driven Software Developer with {this.state.experience}+ years of experience in developing softwares from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Gurgaon, India</li>
                <li>(+91) 702709107</li>
                <li>sushma2219@gmail.com</li>
              </ul>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech Computer Science</h4>
              <h5>2014 - 2018</h5>
              <p><em>BML Munjal University</em></p>
            { /* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>*/}
            </div>
            <div className="resume-item">
              <h4>Intermediate</h4>
              <h5>2013 - 2014</h5>
              <p><em>Meenakshi Public School</em></p>
            </div>

            <h3 className="resume-title">Languages</h3>
            <div className="resume-item">
              <h4>English</h4>
              <p><em>Read, Write and Speak</em></p>
            </div>
            <div className="resume-item">
              <h4> Hindi</h4>
              <p><em>Read, Write and Speak</em></p>
            </div>

            <h3 className="resume-title">Skills</h3>
            <section id="about" className="about p-0">
            <div className="skills-content pr-4">
              <VisibilitySensor onChange={this.checkProgress} delayedCall>
              <>
                <ProgressBar title="Laravel" percentage={this.state.laravelWidth} width={this.state.laravelWidth+"%"}/>
                <ProgressBar title="Vue JS" percentage={this.state.vueWidth} width={this.state.vueWidth+"%"}/>
                <ProgressBar title="HTML, CSS" percentage={this.state.htmlWidth} width={this.state.cssWidth+"%"}/>
                <ProgressBar title="jQuery" percentage={this.state.jqueryWidth} width={this.state.jqueryWidth+"%"}/>
                {/* <ProgressBar title="PHP" percentage={this.state.phpWidth} width={this.state.phpWidth+"%"}/> */}
                <ProgressBar title="PHP, CodeIgniter" percentage={this.state.ciWidth} width={this.state.ciWidth+"%"}/>
                <ProgressBar title="MySQL" percentage={this.state.mysqlWidth} width={this.state.mysqlWidth+"%"}/>
                <ProgressBar title="Git" percentage={this.state.gitWidth} width={this.state.gitWidth+"%"}/>
              </>
              </VisibilitySensor>
            </div>
            </section>

            {/* <div className="resume-item">
              <h4>Learning New Skills</h4>
            </div>
            <div className="resume-item">
              <h4>Intermediate</h4>
            </div> */}

          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>Jan 2023 - Present</h5>
              <p><em>Garden City Games</em></p>
              <p>
              <ul>
                <li>Developed pet feature, Reimplemented Subscription Plan.</li>
                <li>Worked on PHP, CodeIgniter and MySQL.</li>
              </ul>
              </p>
            </div>

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>June 2022 - Dec 2022</h5>
              <p><em>Webmanufact Pvt Ltd, Bangalore </em></p>
              <p>
              <ul>
                <li>Developed warehouse management system.</li>
                <li>Worked on Vue, Laravel and MySQL.</li>
              </ul>
              </p>
            </div>

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Jul 2021 - May 2022</h5>
              <p><em>Work Companion LLP, Gurgaon </em></p>
              <p>
              <ul>
                <li>Developed payroll, survey & polls features</li>
                <li>Worked on PHP, MySQL and CodeIgniter.</li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Feb 2021 - Jun 2021</h5>
              <p><em>Teckmovers Solutions Pvt. Ltd., Spaze IT Park, Gurgaon </em></p>
              <p>
              <ul>
                <li>Responsible for handling CRM and optimized code for better functionality.</li>
                <li>Develop application features and improvements.</li>
                <li>Worked on React, Git and CodeIgniter.</li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>Oct 2018 - Feb 2021</h5>
              <p><em>Zeabros India Pvt. Ltd., Dlf, Gurgaon</em></p>
              <p>
              <ul>
                <li>Used programming technologies - PHP, SQL and codeigniter to deliver the projects.</li>
                <li>Created dynamic websites and erps with complete functionalities.</li>
                <li>Developed Ecommerce websites with payment Integration.</li>
                <li>Client Coordination</li>
              </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
     </>
			);
	}
}
export default Resume;