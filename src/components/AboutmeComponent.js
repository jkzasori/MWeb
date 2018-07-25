import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Progress } from 'reactstrap';
import Study from './StudyComponent';

function AboutMe(props) {
	return(
		<div className="">
			<div>
				<Study />
			</div>				
			<div className="row">
					<div className="col-12">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
							<BreadcrumbItem>About Me</BreadcrumbItem>
						</Breadcrumb>
					</div>
				</div>
			<div className="container">

				<div className="row row-content ">
					<div className="col-12 ">
						<div className="row header-aboutme about blueMiddle ShadowBox">
							<div className="col-12 col-sm-6 information-aboutme">
								otro
							</div>
							<div className=" photo-aboutme col-12 col-md-6">
								<div className="img-up" >
								</div>
								<img src="./assets/profile.jpg" alt="img José Támara"/>
							</div>
						</div>
						<div className="description-aboutme about ShadowBox">
							<div className="padding-30">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								<br/>
							</div>
							<div className="padding-30 btn-description">
								<button className="btn btn-default ShadowBox"><Link to="/contact">DOWNLOAD CV</Link></button>
								<button className="btn btn-default ShadowBox"><Link to="/contact"> CONTACT ME</Link></button>
							</div>
						</div>
						<div className="study-aboutme about">
							<h2>STUDY</h2>
							<div className="timeline">
								<div className="boxContainer left">
									<div className="box ShadowBox">
										<h2>2018</h2>
										<p>Ingeniero de Sistemas<br/>
										Universidad de Cartagena<br/></p>
									</div>
								</div>
								<div className="boxContainer right">
									<div className="box ShadowBox">
									<h2>2018</h2>
										<p>Ingeniero de Sistemas<br/>
										Universidad de Cartagena<br/></p>
									</div>
								</div>
								<div className="boxContainer left">
									<div className="box ShadowBox">
										<h2>2018</h2>
										<p>Ingeniero de Sistemas<br/>
										Universidad de Cartagena<br/></p>
									</div>
								</div>
							</div>
						</div>
						<div className="skills-aboutme about">
							<h2>Skills</h2>
							<div className="ShadowBox">
								<div className="sk-h ">
									<div className="text-center">50%</div>
									<Progress value={50}/>
									<div className="text-center">Skill1</div>
								</div>
								<div className="sk-h ">
									<div className="text-center">75%</div>
									<Progress value={75}/>
									<div className="text-center">Skill2</div>
								</div>
								<div className="sk-h ">
									<div className="text-center">5%</div>
									<Progress value={5}/>
									<div className="text-center">Skill3</div>
								</div>
							</div>
						</div>
						<div className="interest-aboutme about">
							<h2>Interest</h2>
							<div className="ShadowBox">
								<div className="row">
									<div className="col-12">
										<p>
											Me encanta ver películas, series animadas y escuchar música. Las palabras para mi son mágicas siendo capaces de transportar a mundos fascinantes; por ello, 
											leer novelas, poesías, cuentos, es de vital importancia en mi vida. Además, escribir y crear mis propias historias, son cosas que sencillamente me apasionan. Mi debilidad las pastas ;p </p>
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
									<div className="col-sm-4 col-md-2 col-xs-6 ">
										Música
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default AboutMe;