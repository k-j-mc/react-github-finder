import React from "react";

import { useLocation } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import BackButton from "../components/BackButton";

const InformationPage = () => {
	const location = useLocation();

	const user = location.state;

	console.log(user);
	return (
		<>
			<BackButton />
			<Grid container spacing={2} className="gridCenterUserItems">
				<Grid item xs={1} />
				<Grid item xs={10}>
					<Typography variant="h5">
						{user.login.toUpperCase()}
					</Typography>
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</>
	);
};

export default InformationPage;
