import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";

import Loader from "../Loader";
import NoUser from "./NoUser";

import UserItem from "./UserItem";

const Users = ({ users, loading, getUser }) => {
	if (loading) {
		return <Loader />;
	} else if (!loading && users.length > 0) {
		return (
			<Grid container spacing={2} className="cardGrid">
				{users.map((user) => (
					<Grid item xs={12} sm={6} md={4} lg={2} key={user.id}>
						<UserItem user={user} getUser={getUser} />
					</Grid>
				))}
			</Grid>
		);
	} else {
		return <NoUser />;
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;
