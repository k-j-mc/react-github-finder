import React, { useContext } from "react";

import { Link } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

const UserItem = ({ user }) => {
	const githubContext = useContext(GithubContext);
	const { getUser } = githubContext;

	return (
		<Card className="gridCenterUserItems">
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
					className="userLogin"
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

export default UserItem;
