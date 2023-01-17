import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const PagesNavigation = () => {
	return (
		<>
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default PagesNavigation;
