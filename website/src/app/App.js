import React ,{Component} from 'react';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Switch } from 'react-router-dom';
import Admin from "./admin/Admin";
import Website from "./website/Website";

class App extends Component{
	render()
	{
		return (
					<Switch>
						<Route path="/admin">
							<Admin/>
						</Route>
						<Route path="/">
							<Website />
						</Route>
					</Switch>
			);
	}
}
export default App;