import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Contact(props) {
	return(
		<div className="contact">
			<div className="row">
				<div className="col-12">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem>Contact Me</BreadcrumbItem>
					</Breadcrumb>
				</div>
			</div>
			<div className="container text">
				<div className="row row-content information">
					<div className="col-12 text-center">
						<div><h3>Información de Contacto</h3></div>
					</div>
					<div className="col-12 col-sm-4 offset-sm-1">
						<h5>Dirección</h5>
						<address>
							Cra. 14. Calle san Pablo<br/>
							Turbaco - Bolivar<br/>
							Colombia<br/>
							<i className="fa fa-phone"></i>: +57 311 355 3692<br/>
							<i className="fa fa-envelope"></i>: <a href="mailto:jotafu@live.com">jotafu@live.com</a>
						</address>
					</div>
					<div className="col-12 col-sm-6 offset-sm-1">
						
					</div>
					<div className="col-12 col-sm-11 offset-sm-1">
						<div className="btn-group" role="group">
							<a role="button" className="btn btn-primary" href="tel:+573113553692"><i className="fa fa-phone"></i> Call</a>
							<a role="button" className="btn btn-info" href="skype:jotafu@live.com?chat"><i className="fa fa-skype"></i> Skype</a>
							<a role="button" className="btn btn-success" href="mailto:jotafu@live.com"><i className="fa fa-envelope"></i> Email</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Contact;