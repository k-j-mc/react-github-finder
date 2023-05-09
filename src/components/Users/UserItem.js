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
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					align="center"
				>
					{login}
				</Typography>
			</CardContent>

			<CardActions className="cardActions">
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
