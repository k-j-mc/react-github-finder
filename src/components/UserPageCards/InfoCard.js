import React, { Fragment } from "react";

import { Avatar, Button, Grid, Link, Typography } from "@mui/material";

import Icons from "../Icons";

const InfoCard = (props) => {
	const {
		avatar_url,
		bio,
		blog,
		company,
		hireable,
		html_url,
		location,
		login,
		name,
		site_admin,
	} = props.user;

	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={5} lg={3}>
				<Avatar alt={login} src={avatar_url} className="userAvatar" />
				<Typography variant="h4">{login}</Typography>
				{location && (
					<Typography paragraph>Location: {location}</Typography>
				)}
				<Typography paragraph>
					Hireable:
					{hireable ? (
						<Icons.True className="trueFalseIcon" />
					) : (
						<Icons.False className="trueFalseIcon" />
					)}
				</Typography>
				<Typography paragraph>
					Admin:
					{site_admin ? (
						<Icons.True className="trueFalseIcon" />
					) : (
						<Icons.False className="trueFalseIcon" />
					)}
				</Typography>
			</Grid>

			<Grid item xs={12} md={7} lg={9}>
				{bio && (
					<Fragment>
						<Typography paragraph>
							<strong>Bio:</strong>
						</Typography>
						<Typography paragraph>{bio}</Typography>
					</Fragment>
				)}
				<Button className="profileLink">
					<Link href={html_url} underline="none">
						Visit Github Profile
					</Link>
				</Button>
				{name && (
					<Typography paragraph>
						<strong>Name: </strong>
						{name}
					</Typography>
				)}
				{company && (
					<Typography paragraph>
						<strong>Company: </strong>
						{company}
					</Typography>
				)}
				{blog && (
					<Typography paragraph>
						<strong>Website: </strong>
						{blog}
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};

export default InfoCard;
