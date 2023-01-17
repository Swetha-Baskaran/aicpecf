import React from "react";
import Header from "./components/Header";
import About from "./components/AboutAtal";
import InvestorsCount from "./components/InvestorsCount";

const Home = () => {
	return (
		<div>
			<Header />
			<About />
			<InvestorsCount />
		</div>
	);
};

export default Home;
