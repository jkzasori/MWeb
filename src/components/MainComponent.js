import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutMeComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { BASICME } from '../shared/basicMe';
import { STUDY } from '../shared/Study';
import { PPERSONAL } from '../shared/PPersonal';
import { HBLANDAS } from '../shared/HBlandas';
import { DATABASE } from '../shared/database';
import { LENGUAJESYLIBRERIAS } from '../shared/LenguajesyLibrerias';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	constructor(props) {
		super(props);
		this.state = {
			basicme: BASICME,
			study: STUDY,
			ppersonal: PPERSONAL,
			hblandas: HBLANDAS,
			database: DATABASE,
			lyl: LENGUAJESYLIBRERIAS
		}
	}

	render() {
		const AboutId = ({match}) => {
			return(
				<About study={this.state.study} 
				basicme={this.state.basicme[0]} 
				likes={this.state.ppersonal}
				hblandas={this.state.hblandas}
				database={this.state.database}
				lyl={this.state.lyl}
				/> 
				)
		}
		return(
			<div>
				<Header />
						<Switch location={this.props.location}>
							<Route  path='/home' component={Home}/>
							<Route exact path='/aboutme' component={AboutId}/>
							<Route exact path='/contact' component={Contact}/>
							<Redirect to='/home' />
						</Switch>
				<Footer />
			</div>
			);
	}
}

export default Main;