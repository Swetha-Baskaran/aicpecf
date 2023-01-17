import "./style.css";
import img1 from "../../../../assets/images/dsc-3070.jpg"
import img2 from "../../../../assets/images/dsc-3080.jpg"
import img3 from "../../../../assets/images/dsc-3125.jpg"
import img4 from "../../../../assets/images/dsc-3126.jpg"
import img5 from "../../../../assets/images/mg-2636.jpg"
import img6 from "../../../../assets/images/mg-2734.jpg"
import img7 from "../../../../assets/images/mg-2805.jpg"

const Header = () => {
	return (
		<div id='slider'>
			<div className='slides'>
				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img7} className="headerImg" />
					</div>
				</div>
				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img1} className="headerImg" />
					</div>
				</div>

				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img2} className="headerImg" />
					</div>
				</div>

				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img3} className="headerImg" />
					</div>
				</div>

				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img4} className="headerImg" />
					</div>
				</div>
				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img5} className="headerImg" />
					</div>
				</div>
				<div className='slider'>
					<div className='legend'></div>
					<div className='Content'>
						<div className='Content-txt'>
							<h1> Your title </h1>
							<h2> Your description </h2>
						</div>
					</div>
					<div className='images'>
						<img alt='' src={img6} className="headerImg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
