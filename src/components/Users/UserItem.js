import React from "react";
import PropTypes from "prop-types";

import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from "@mui/material";

import "./index.css";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<Card>
			<CardMedia title={login} image={avatar_url} className="cardImage" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{login}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Info about user...
				</Typography>
			</CardContent>

			<CardActions>
				<Button size="small" color="primary">
					<Link href={html_url} underline="none">
						More info
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
