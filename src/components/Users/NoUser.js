import React from "react";
import { Typography } from "@mui/material";

import Icons from "../Icons";

const NoUser = () => {
	return (
		<div className="gridCenterItems">
			<Icons.Sad className="noResultIcon" />
			<Typography paragraph>No results found</Typography>
		</div>
	);
};

export default NoUser;
