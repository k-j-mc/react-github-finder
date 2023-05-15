import React, { useContext, useEffect } from "react";

import { Grid } from "@mui/material";

import GithubContext from "../../context/github/githubContext";
import NotificationContext from "../../context/notifications/notificationContext";

import Loader from "../Loader";
import NoUser from "./NoUser";

import UserItem from "./UserItem";

const Users = () => {
	const githubContext = useContext(GithubContext);
	const notificationContext = useContext(NotificationContext);

	const { loading, users, error, searchQuery } = githubContext;

	useEffect(() => {
		if (users.length === 0 && !searchQuery) {
			githubContext.getDefaultUsers();
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (error) {
			notificationContext.setNotification(error, "error");
		}
		// eslint-disable-next-line
	}, [error]);

	if (loading) {
		return <Loader message="Loading..." />;
	} else if (!loading && users.length > 0) {
		return (
			<Grid container spacing={2} className="cardGrid">
				{users.map((user) => (
					<Grid item xs={12} sm={4} md={3} lg={2} key={user.id}>
						<UserItem user={user} />
					</Grid>
				))}
			</Grid>
		);
	}
	if (!loading && error) {
		return <NoUser />;
	}
};

export default Users;
