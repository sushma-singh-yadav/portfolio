import React ,{Component} from 'react';
import { FaInstagram,FaLinkedinIn,FaSkype,FaGithub,FaShareAlt,FaRegArrowAltCircleUp } from 'react-icons/fa';

class Footer extends Component{
	render()
	{
		return (
			<>
       <footer id="footer">
    <div className="container">
      <h3>Sushma Yadav</h3>
      <div className="social-links">
       <a href="#" className="instagram"><i><FaInstagram/></i></a>
                    <a href="#" className="google-plus"><i><FaSkype/></i></a>
                    <a href="#" className="linkedin"><i><FaLinkedinIn/></i></a>
                    <a href="#" className="linkedin"><i><FaGithub/></i></a>
                  </div>
      <div className="copyright">
        &copy; Copyright <strong><span>Sushma</span></strong>. All Rights Reserved
      </div>
      {/*<div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>*/}
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i><FaRegArrowAltCircleUp/></i></a>
     </>
			);
	}
}
export default Footer;