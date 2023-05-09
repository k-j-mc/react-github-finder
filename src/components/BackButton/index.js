import React from "react";

import { useNavigate } from "react-router-dom";

import { Grid, IconButton } from "@mui/material";

import Icons from "../Icons";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<Grid container spacing={2} className="backwardsNav">
			<Grid item xs={0.5} />
			<Grid item xs={2}>
				<IconButton onClick={() => navigate("/")}>
					<Icons.Back />
				</IconButton>
				<Grid item xs={9.5} />
			</Grid>
		</Grid>
	);
};

export default BackButton;
