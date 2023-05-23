import React ,{Component} from 'react';
import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import UserProfile from './views/UserProfile';
import Login from './Login';

class Admin extends Component{
	render()
	{
		return (
			<>
			<BrowserRouter>
			<Switch>
			<Route path="/admin/dashboard"><Dashboard/></Route>
			<Route path="/admin/user"><UserProfile/></Route>
			<Route path="/admin/login"><Login/></Route>
			<Redirect to="/admin/login" />
			</Switch>
			</BrowserRouter>
			 </>
			);
	}
}
export default Admin;