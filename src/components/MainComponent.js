import React, {Component} from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutMeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { BASICME } from '../shared/basicMe';
import { STUDY } from '../shared/Study';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	constructor(props) {
		super(props);
		this.state = {
			basicme: BASICME,
			study: STUDY
		}
	}

	render() {
		const AboutId = ({match}) => {
			return(
				<About study={this.state.study} 
				basicme={this.state.basicme.filter((basicme) => basicme.id)[0]} /> 
				)
		}
		return(
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/aboutme' component={AboutId}/>
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