import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Projects(props) {
	return(
		<div className="">
			<div className="row">
				<div className="col-12">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem>Projects</BreadcrumbItem>
					</Breadcrumb>
				</div>
			</div>
			<div className="container">
				<div className="row row-content">
					<div className="col-12 col-sm-6">
						Projects
					</div>
				</div>
			</div>
		</div>
		)
}

export default Projects;