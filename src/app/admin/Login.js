import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Custom.css';

class Login extends Component{
	render()
	{
		return (
			<>
		<section id="hero">
        <div className="hero-container">
         
          <h1>Administration Login</h1>
          
           <div className="card w-25 mb-5">
          <div className="card-body">
          <div className="row">
          <div className="col-md-12">
          <h4 className="text-center">Login</h4>
          <hr/>
          <form>
          <div className="form-group">
          {/*<label><strong>Username</strong></label>*/}
          <input type="text" className="form-control w-100 mt-1 p-2" placeholder="Username"/>
          </div>
          <div className="form-group mt-3">
          {/*<label><strong>Password</strong></label>*/}
          <input type="password" className="form-control w-100 mt-1 p-2" placeholder="Password"/>
          </div>
          <div className="form-group mt-3">
          <input type="submit" className="btn-grad w-100"/>
          </div>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
			</>
			);
	}
}
export default Login;