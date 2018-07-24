import React, {Component} from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutMeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	render() {
		return(
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/aboutme' component={About}/>
					<Route path='/projects' component={Projects}/>
					<Route path='/contact' component={Contact}/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
			);
	}
}

export default Main;