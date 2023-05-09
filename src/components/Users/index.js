import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";

import Loader from "../Loader";

import UserItem from "./UserItem";

const Users = ({ users, loading }) => {
	if (loading) {
		return <Loader />;
	} else {
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
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;