import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Card, CardContent, Grid } from "@mui/material";

import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import InfoCard from "../components/UserPageCards/InfoCard";
import SocialCard from "../components/UserPageCards/SocialCard";
import RepoCard from "../components/UserPageCards/RepoCard";

const UserPage = (props) => {
	const { loading, user } = props;

	const repos = user.repos;

	return loading ? (
		<Loader />
	) : (
		<Fragment>
			<BackButton />
			<Grid container spacing={2}>
				<Grid item xs={1.5} />
				<Grid item xs={9}>
					<Card className="pageInfoCard">
						<CardContent className="pageInfoContent">
							<InfoCard user={user} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={1.5} />

				<Grid item xs={1.5} />
				<Grid item xs={9}>
					<Card>
						<CardContent className="pageSocialContent">
							<SocialCard user={user} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={1.5} />

				<Grid item xs={1.5} />
				<Grid item xs={9}>
					<Card>
						<CardContent className="pageSocialContent">
							<RepoCard repos={repos} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={1.5} />
			</Grid>
		</Fragment>
	);
};

UserPage.propTypes = {
	loading: PropTypes.bool.isRequired,
};

export default UserPage;
