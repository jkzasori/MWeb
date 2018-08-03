import React from 'react';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function Home(props) {
	return(

		<div className="home">
			<div className="container">
				<div className="row row-content ">
					
							<div className="col-12">
							<FadeTransform
		                in
		                transformProps={{
		                    exitTransform: 'scale(0.9) translateY(50%)'
		                }}>
								<div className=" box-home ShadowBox">
									<div className="content-avatar">
										<div className="avatar"></div>
									</div>
									<div className="text-center">
										<h1>JOSÉ TÁMARA</h1>
										<h4>SYSTEMS ENGINEER</h4>
										<h6>WEB DEVELOPER</h6>
									</div>
									<div className="social text-center">
										<a className="ico btn btn-social-icon btn-github" href="https://github.com/jkzasori" target="_blanck"><i className="fa fa-github"></i></a>
			            				<a className="ico btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/jkzasori/" target="_blannk"><i className="fa fa-linkedin"></i></a>
			            				<a className="ico btn btn-social-icon btn-google" href="https://www.youtube.com/user/jkingzasori" target="_blanck"><i className="fa fa-youtube"></i></a>
			            				<a className="ico btn btn-social-icon btn-github" href="mailto:jotafu@live.com"><i className="fa fa-envelope-o"></i></a>
									</div>
								</div>
							</FadeTransform>	
							</div>
					
					<div className="col-12 link-about">
						<div className="link-content text-center ShadowBox">
							<Link to="/aboutme" className="btn btn-home">DISCOVER ME</Link>
						</div>
						
					</div>
				</div>
			</div>
			
		</div>
		);
}
export default Home;