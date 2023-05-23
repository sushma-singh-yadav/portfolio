import React ,{Component, useRef } from 'react';
import { FaInstagram,FaLinkedinIn,FaSkype,FaGithub,FaShareAlt } from 'react-icons/fa';
import {BiShareAlt,BiEnvelope,BiPhoneCall} from 'react-icons/bi';
import emailjs from '@emailjs/browser';

class Contact extends Component{
  constructor(props)
  {
    super(props);

    this.sendEmail=this.sendEmail.bind(this);
  }
   sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5rm8t9', 'template_6tg086v', e.target, 'BL5cPBwLN0ddE4AYU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	render()
	{
		return (
			<>
      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>Contact Me</span>
          <h2>Contact Me</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-share-alt"><BiShareAlt/></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://www.instagram.com/sushma-singh-yadav" target="_blank" className="instagram"><i><FaInstagram/></i></a>
                    {/* <a href="#" className="google-plus"><i><FaSkype/></i></a> */}
                    <a href="https://www.linkedin.com/in/sushma-singh-yadav/" target="_blank" className="linkedin"><i><FaLinkedinIn/></i></a>
                    <a href="https://github.com/sushma-singh-yadav" target="_blank" className="linkedin"><i><FaGithub/></i></a>
                  
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"><BiEnvelope/></i>
                  <h3>Email Me</h3>
                  <p>sushma2219@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"><BiPhoneCall/></i>
                  <h3>Call Me</h3>
                  <p>+91 7027091097</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form method="post" role="form" className="php-email-form" onSubmit={(e)=> this.sendEmail(e)}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="from_name" className="form-control" id="from_name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="from_email" id="from_email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
     </>
			);
	}
}
export default Contact;