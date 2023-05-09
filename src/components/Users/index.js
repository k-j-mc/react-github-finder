import React from "react";

import { Grid } from "@mui/material";

import UserItem from "./UserItem";

const Users = ({ users }) => {
	return (
		<Grid container spacing={2} className="cardGrid">
			{users.map((user) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={2}
					className="userCard"
					key={user.id}
				>
					<UserItem user={user} />
				</Grid>
			))}
		</Grid>
	);
};

export default Users;
