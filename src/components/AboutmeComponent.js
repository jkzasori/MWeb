import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Progress } from 'reactstrap';

function AboutMe(props) {

	const RenderStudy = props.study.map((study) => {
		return(
			<div key={study.id}>
				<div className={study.D + ' boxContainer'}>
					<div className="box ShadowBox">
						<h2>{study.date}</h2>
						<p>* {study.name}.<br/>
							* {study.School}.<br/>
							* {study.city}.<br/>
							* {study.country}.
						</p>
					</div>
				</div>
			</div>
			)
	});

	const RenderLikes = props.likes.map((likes) => {
		return(
				<div key={likes.id} className="col-sm-4 col-md-2 col-xs-6 likes">
					<div className="icon">
						<i className="fa fa-heart"></i>
					</div>
					{likes.ppersonal}
				</div>
			)
	});
	const RenderHblandas = props.hblandas.map((hblandas) => {
		return(
			<div key={hblandas.id} className="col-sm-4 col-md-2 col-xs-6 color">
				<div className="sk-h ">
					<div className="text-center">{hblandas.name}</div>
					<Progress animated color="success" value={hblandas.level}/>
					<div className="text-center name">{hblandas.level}%</div>
					</div>
			</div>
			)
	});
	const RenderDatabase = props.database.map((database) => {
		return(
			<div key={database.id} className="col-sm-4 col-md-2 col-xs-6 color">
				<div className="sk-h ">
					<div className="text-center">{database.name}</div>
					<Progress animated  value={database.level}/>
					<div className="text-center name">{database.level}%</div>
					</div>
			</div>
			)
	});
	const RenderLyl = props.lyl.map((lyl) => {
		return(
			<div key={lyl.id} className="col-sm-4 col-md-2 col-xs-6 color">
				<div className="sk-h ">
					<div className="text-center">{lyl.name}</div>
					<Progress animated color="danger" value={lyl.level}/>
					<div className="text-center name">{lyl.level}%</div>
					</div>
			</div>
			)
	});
	return(
		<div className="">
			<div className="ShadowBox  Header">
				
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
							<div className="col-12 col-md-6 information-aboutme">
								<div className="about-basic">
									<h1 className="black-text">{props.basicme.name}</h1>
									<h5 className="black-text">{props.basicme.profetion}</h5>
									<p> <br/>
									<span >
										<a className="btn btn-social-icon btn-github" href={"tel:"+props.basicme.tel}><i className="fa fa-phone"></i></a> <a href={"tel:"+props.basicme.tel}>{props.basicme.tel}</a><br/>
									</span>
									<span >
										<a className="btn btn-social-icon btn-github" href={"mailto:"+props.basicme.email}><i className="fa fa-envelope-o"></i></a> <a href={"mailto:"+props.basicme.email}>{props.basicme.email}</a><br/>
									</span>
									<a className="btn btn-social-icon btn-github" href={props.basicme.github} target="_blanck"><i className="fa fa-github"></i></a> <a href={props.basicme.github} target="_blanck">{props.basicme.github}</a><br/>
									<a className="btn btn-social-icon btn-github" href={props.basicme.linkedin} target="_blanck"><i className="fa fa-linkedin"></i></a> <a href={props.basicme.linkedin} target="_blanck">{props.basicme.linkedin}</a> <br/></p>
								</div>
							</div>
							<div className=" photo-aboutme col-0 col-md-6">
								<div className="img-up" >
								</div>
								<img src="./assets/profile.jpg" alt="img José Támara"/>
							</div>
						</div>
						<div className="description-aboutme about ShadowBox">
							<div className="padding-30">
								{props.basicme.description} 
								<br/>
							</div>
							<div className="padding-30 btn-description">
								<button className="btn btn-default ShadowBox"><Link to="/contact">DOWNLOAD CV</Link></button>
								<button className="btn btn-default ShadowBox"><Link to="/contact"> CONTACT ME</Link></button>
							</div>
						</div>
						<div className="study-aboutme about">
							<h2 className="black-text">STUDY</h2>
							<div className="timeline">
								{RenderStudy}
							</div>
						</div>
						<div className="skills-aboutme about">
							<h2 className="black-text">SKILLS</h2>
							<div className="">
								<div className="row hblandas ShadowBox">
								<div className="col-12 t bg-success"><h5 className="white-text">HABILIDADES SOCIALES Y PERSONAL</h5></div>
									{RenderHblandas}
								</div>
								<div className="skills"></div>
								<div className="row database ShadowBox ">
								<div className="col-12 t bg-info"><h5 className="white-text">BASE DE DATOS</h5></div>
									{RenderDatabase}
								</div>
								<div className="skills"></div>
								<div className="row lyl ShadowBox">
								<div className="col-12 t bg-danger"><h5 className="white-text">LENGUAJES, LIBRERÍAS Y FRAMEWORKS</h5></div>
									{RenderLyl}
								</div>
								
							</div>
						</div>
						<div className="interest-aboutme about">
							<h2 className="black-text">MY LIKES</h2>
							<div className="ShadowBox ">
								<div className="row l-cont">
									<div className="col-12 liketome">
										<p>
											{props.basicme.liketome}
										</p>
									</div>
									<div className="col-12 liketome b">
										<div className="row">
										{RenderLikes}
										</div>
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