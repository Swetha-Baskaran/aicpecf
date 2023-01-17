import {Box} from "@mui/system";
import React from "react";
import {ThreeCircles} from "react-loader-spinner";

const LoadingIndicator = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#141e2370",
				margin: "auto",
				position: "fixed",
				zIndex: "10",
			}}
		>
			<ThreeCircles
				height='100'
				width='100'
				color='#000080c7'
				wrapperStyle={{
					backgroundColor: "transparent",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				visible={true}
				ariaLabel='three-circles-rotating'
			/>
		</Box>
	);
};

export default LoadingIndicator;
