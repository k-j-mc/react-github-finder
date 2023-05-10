import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

const UserItem = ({ user, getUser }) => {
	return (
		<Card className="gridCenterItems">
			<Avatar
				alt={user.login}
				src={user.avatar_url}
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
						onClick={() => getUser(user.login)}
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
