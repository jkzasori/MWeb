import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
								<button className="btn btn-default ShadowBox">DOWNLOAD CV</button>
								<button className="btn btn-default ShadowBox">CONTACT ME</button>
							</div>
						</div>
						<div className="study-aboutme about">
							<h2>STUDY</h2>
							<div className="timeline">
								<div className="boxContainer left">
									<div className="box ShadowBox">
										khkhjkhk
									</div>
								</div>
								<div className="boxContainer right">
									<div className="box ShadowBox">
									ooooooooo
									</div>
								</div>
							</div>
						</div>
						<div className="skills-aboutme about">
							skills
						</div>
						<div className="interest-aboutme about">
							interest
						</div>
						AboutMe<br/>
						
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
		</div>
		);
}

export default AboutMe;