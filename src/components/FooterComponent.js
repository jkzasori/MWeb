import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return(
			<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
            		<div className="col-4 offset-1 col-sm-2">
            			<h5>Links</h5>
            			<ul className="list-unstyled">
            				<li><Link to='/home'>Home</Link></li>
            				<li><Link to='/aboutme'>About Me</Link></li>
            				<li><Link to='/projects'>Projects</Link></li>
            				<li><Link to='/contact'>Contact</Link></li>
            			</ul>
            		</div>
            		<div className="col-12 col-sm-4 align-self-center ">
            			<div className="text-center">
            				<a className="btn btn-social-icon btn-github" href="https://github.com/jkzasori" target="_blanck"><i className="fa fa-github"></i></a>
            				<a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/jkzasori/" target="_blannk"><i className="fa fa-linkedin"></i></a>
            				<a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/jkingzasori" target="_blanck"><i className="fa fa-youtube"></i></a>
            				<a className="btn btn-social-icon btn-github" href="mailto:jotafu@live.com"><i className="fa fa-envelope-o"></i></a>
            			</div>
            		</div>
            </div>
            <div className="row justify-content-center">
            	<div className="col-auto">
            		<p>@Copyright 2018 Jkzasori</p>
            	</div>
            </div>
        </div>
			</div>
		);
}

export default Footer;