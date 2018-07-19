import React from 'react';

function Footer(props) {
	return(
			<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
            		<div className="col-4 offset-1 col-sm-2">
            			<h5>Links</h5>
            			<ul className="list-unstyled">
            				<li>Home</li>
            				<li>About Me</li>
            				<li>Projects</li>
            				<li>Contact</li>
            			</ul>
            		</div>
            		<div className="col-12 col-sm-4 align-self-center ">
            			<div className="text-center">
            				<a className="btn btn-social-icon btn-github" href=""><i className="fa fa-github"></i></a>
            				<a className="btn btn-social-icon btn-linkedin" href=""><i className="fa fa-linkedin"></i></a>
            				<a className="btn btn-social-icon btn-google" href=""><i className="fa fa-youtube"></i></a>
            				<a className="btn btn-social-icon btn-github" href=""><i className="fa fa-envelope-o"></i></a>
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