import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import "./index.css";

const UserItem = ({ user }) => {
	return (
		<Card>
			<CardMedia
				title={user.login}
				image={user.avatar_url}
				className="cardImage"
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					align="center"
				>
					{user.login}
				</Typography>
			</CardContent>

			<CardActions className="cardActions">
				<Button size="small" color="primary">
					<Link
						to={`/user/${user.login}`}
						className="linkTo"
						state={user}
					>
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
