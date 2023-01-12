import "./style.css";

const InvestorsCount = () => {
    // let valueDisplays = document.querySelectorAll(".num");
	// let interval = 4000;
	// valueDisplays.forEach(valueDisplay => {
	// 	let startValue = 0;
	// 	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	// 	let duration = Math.floor(interval / endValue);
	// 	let counter = setInterval(function () {
	// 		startValue += 1;
	// 		valueDisplay.textContent = startValue;
	// 		if (startValue == endValue) {
	// 			clearInterval(counter);
	// 		}
	// 	}, duration);
	// });
	return (
		<div className='wrapper'>
			<div className='container'>
				<i className='fas fa-utensils'></i>
				<span className='num' data-val='400'>
					000
				</span>
				<span className='text'>Meals Delivered</span>
			</div>
			<div className='container'>
				<i className='fas fa-smile-beam'></i>
				<span className='num' data-val='340'>
					000
				</span>
				<span className='text'>Happy Customers</span>
			</div>
			<div className='container'>
				<i className='fas fa-list'></i>
				<span className='num' data-val='225'>
					000
				</span>
				<span className='text'>Menu Items</span>
			</div>
			<div className='container'>
				<i className='fas fa-star'></i>
				<span className='num' data-val='280'>
					000
				</span>
				<span className='text'>Five Stars</span>
			</div>
		</div>
	);
};

export default InvestorsCount;
