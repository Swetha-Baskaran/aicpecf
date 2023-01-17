import React from "react";
import Header from "./components/Header";
import About from "./components/AboutAtal";
import InvestorsCount from "./components/InvestorsCount";
import StoriedBehindStartups from "./components/StoriedBehindStartups";
import MakersLabFacility from "./components/MakersLabFacility";
import CollaborateWithUs from "./components/CollaborateWithUs";
import UpcomingEvents from "./components/UpcomingEvents";

const Home = () => {
	return (
		<div>
			<Header />
			<About />
      <UpcomingEvents />
			<InvestorsCount />
      <StoriedBehindStartups />
      <MakersLabFacility />
      <CollaborateWithUs />
		</div>
	);
};

export default Home;
