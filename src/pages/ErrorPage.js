import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import BackButton from "../components/BackButton";

import Icons from "../components/Icons";

const ErrorPage = () => {
	return (
		<Fragment>
			<BackButton />
			<div className="gridCenterItems">
				<Icons.WrongLocation className="noResultIcon" />
				<Typography paragraph>Uh oh...</Typography>
				<Typography paragraph>Page not found</Typography>
			</div>
		</Fragment>
	);
};

export default ErrorPage;
