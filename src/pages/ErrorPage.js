import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import BackButton from "../components/BackButton";

const ErrorPage = (props) => {
	const { message, icon } = props;

	return (
		<Fragment>
			<BackButton />
			<div className="gridCenterItems">
				{icon}
				<Typography paragraph>Uh oh...</Typography>
				<Typography paragraph>{message}</Typography>
			</div>
		</Fragment>
	);
};

export default ErrorPage;
