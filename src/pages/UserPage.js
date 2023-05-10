import React from "react";

import { Grid, Typography } from "@mui/material";

import Loader from "../components/Loader";

import BackButton from "../components/BackButton";

const InformationPage = (props) => {
	const loading = props.loading;

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = props.user;

	return loading ? (
		<Loader />
	) : (
		<>
			<BackButton />
			<Grid container spacing={2} className="gridCenterUserItems">
				<Grid item xs={1} />
				<Grid item xs={10}>
					<Typography variant="h5">{login}</Typography>
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</>
	);
};

export default InformationPage;
