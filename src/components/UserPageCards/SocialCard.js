import React, { Fragment } from "react";

import { Chip, Grid, Typography } from "@mui/material";

const SocialCard = (props) => {
	const { followers, following, public_gists, public_repos } = props.user;

	return (
		<Grid container spacing={4}>
			<Grid item xs={12} className="gridCenterItems">
				<Typography paragraph>
					<strong>Social:</strong>
				</Typography>
				{followers && (
					<Chip
						label={
							<>
								<strong>Followers: </strong>{" "}
								{followers.toLocaleString()}
							</>
						}
						className="aboutChip"
						color="success"
					/>
				)}
				{following && (
					<Chip
						label={
							<>
								<strong>Following: </strong>{" "}
								{following.toLocaleString()}
							</>
						}
						className="aboutChip"
						color="warning"
					/>
				)}
				{public_repos && (
					<Chip
						label={
							<>
								<strong>Public Repos: </strong>{" "}
								{public_repos.toLocaleString()}
							</>
						}
						className="aboutChip"
						color="info"
					/>
				)}
				{public_gists && (
					<Chip
						label={
							<>
								<strong>Public Gists: </strong>{" "}
								{public_gists.toLocaleString()}
							</>
						}
						className="aboutChip"
						color="secondary"
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default SocialCard;
