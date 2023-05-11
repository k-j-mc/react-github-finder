import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Card, CardContent, Grid } from "@mui/material";

import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import InfoCard from "../components/UserPageCards/InfoCard";
import SocialCard from "../components/UserPageCards/SocialCard";
import RepoCard from "../components/UserPageCards/RepoCard";

import ErrorPage from "./ErrorPage";

import Icons from "../components/Icons";

const UserPage = (props) => {
	const { loading, user } = props;

	const repos = user.repos;

	return (
		<Fragment>
			{loading ? (
				<Loader message="Loading User Information..." />
			) : !loading && user.login ? (
				<Fragment>
					<BackButton />
					<Grid container spacing={2} className="gridAbout">
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
						{repos.length > 0 && (
							<Fragment>
								<Grid item xs={1.5} />
								<Grid item xs={9}>
									<Card>
										<CardContent className="pageSocialContent">
											<RepoCard
												repos={repos}
												user={user}
											/>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={1.5} />
							</Fragment>
						)}
					</Grid>
				</Fragment>
			) : (
				!user.login && (
					<ErrorPage
						message="Something went wrong"
						icon={<Icons.Sad className="noResultIcon" />}
					/>
				)
			)}
		</Fragment>
	);
};

UserPage.propTypes = {
	loading: PropTypes.bool.isRequired,
};

export default UserPage;
