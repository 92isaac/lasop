import React from 'react';
import { Link } from 'react-router-dom';
import "./Testimonial.css";
import View1 from '../assets/1.jpg';
import View2 from '../assets/2.jpg';
import View3 from '../assets/3.jpg';


const TestimonialCarousel = () => {
 
return <div className="testimonial">
<h2>What Our Student Says</h2>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
	{/* <!-- Carousel indicators --> */}
	<ol className="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   
	{/* <!-- Wrapper for carousel items --> */}
	<div className="carousel-inner">		
		<div className="carousel-item active">
			<div className="img-box"><img src={View1} alt=""/></div>
			<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
			<p className="overview"><b>Michael Holz</b>Seo Analyst at <Link to="/">OsCorp Tech.</Link></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={View2} alt=""/></div>
			<p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
			<p className="overview"><b>Paula Wilson</b>Media Analyst at <Link to="/">SkyNet Inc.</Link></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={View3} alt=""/></div>
			<p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
			<p className="overview"><b>Antonio Moreno</b>Web Developer at <Link to="/">Circle Ltd.</Link></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>
	{/* <!-- Carousel controls --> */}
	<Link to="/" className="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i className="fa fa-angle-left"></i>
	</Link>
	<Link to="/" className="carousel-control-next" href="#myCarousel" data-slide="next">
		<i className="fa fa-angle-right"></i>
	</Link>
  </div>
  </div>

};


export default TestimonialCarousel;

