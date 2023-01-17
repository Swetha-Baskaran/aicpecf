import "./style.css";

const Footer = () => {
	return (
		<footer>
			<div className='content'>
				<div className='top'>
					<div className='logo-details'>
						<i className='fab fa-slack'></i>
						<span className='logo_name'>CodingLab</span>
					</div>
					<div className='media-icons'>
						<a href='/about'>
							<i className='fab fa-facebook-f'></i>
						</a>
						<a href='/about'>
							<i className='fab fa-twitter'></i>
						</a>
						<a href='/about'>
							<i className='fab fa-instagram'></i>
						</a>
						<a href='/about'>
							<i className='fab fa-linkedin-in'></i>
						</a>
						<a href='/about'>
							<i className='fab fa-youtube'></i>
						</a>
					</div>
				</div>
				<div className='link-boxes'>
					<ul className='box'>
						<li className='link_name'>Company</li>
						<li>
							<a href='/about'>Home</a>
						</li>
						<li>
							<a href='/about'>Contact us</a>
						</li>
						<li>
							<a href='/about'>About us</a>
						</li>
						<li>
							<a href='/about'>Get started</a>
						</li>
					</ul>
					<ul className='box'>
						<li className='link_name'>Services</li>
						<li>
							<a href='/about'>App design</a>
						</li>
						<li>
							<a href='/about'>Web design</a>
						</li>
						<li>
							<a href='/about'>Logo design</a>
						</li>
						<li>
							<a href='/about'>Banner design</a>
						</li>
					</ul>
					<ul className='box'>
						<li className='link_name'>Account</li>
						<li>
							<a href='/about'>Profile</a>
						</li>
						<li>
							<a href='/about'>My account</a>
						</li>
						<li>
							<a href='/about'>Prefrences</a>
						</li>
						<li>
							<a href='/about'>Purchase</a>
						</li>
					</ul>
					<ul className='box'>
						<li className='link_name'>Courses</li>
						<li>
							<a href='/about'>HTML & CSS</a>
						</li>
						<li>
							<a href='/about'>JavaScript</a>
						</li>
						<li>
							<a href='/about'>Photography</a>
						</li>
						<li>
							<a href='/about'>Photoshop</a>
						</li>
					</ul>
					<ul className='box input-box'>
						<li className='link_name'>Subscribe</li>
						<li>
							<input type='text' placeholder='Enter your email' />
						</li>
						<li>
							<input type='button' value='Subscribe' />
						</li>
					</ul>
				</div>
			</div>
			<div className='bottom-details'>
				<div className='bottom_text'>
					<span className='copyright_text'>
						Copyright © 2021 <a href='/about'>CodingLab.</a>All rights reserved
					</span>
					<span className='policy_terms'>
						<a href='/about'>Privacy policy</a>
						<a href='/about'>Terms & condition</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
