import React ,{Component} from 'react';

class Resume extends Component{
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
              <p><em>Innovative and deadline-driven Software Developer with 2+ years of experience in developing softwares from initial concept to final, polished deliverable.</em></p>
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
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>2021 - Present</h5>
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
              <h5>2018 - 2021</h5>
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