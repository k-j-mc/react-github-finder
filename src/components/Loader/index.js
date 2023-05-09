import React from "react";

import { CircularProgress, Typography } from "@mui/material";

const Loader = () => {
	return (
		<div className="gridCenterItems">
			<CircularProgress className="loaderCircle" />
			<Typography paragraph>Loading...</Typography>
		</div>
	);
};

export default Loader;
