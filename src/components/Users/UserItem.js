import React from "react";

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from "@mui/material";

import IMG from "../../images/avatardemoimage.png";

import "./index.css";

const UserItem = (props) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={IMG}
					alt="git user"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Git user
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Info about user...
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link href="" underline="none">
					<Button size="small" color="primary">
						More info
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default UserItem;
