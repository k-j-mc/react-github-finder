import React, { Fragment, useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import {
	Divider,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemText,
	Pagination,
	Tooltip,
	Typography,
} from "@mui/material";

import Icons from "../Icons";

const RepoCard = (props) => {
	const { repos, user } = props;

	const pages = Math.ceil(repos.length / 5);

	const [page, setPage] = useState(1);

	const [repoItems, setRepoItems] = useState(repos.slice(0, 5));

	useEffect(() => {
		setRepoItems(repos.slice((page - 1) * 5, page * 5));
	}, [page]);

	const handleChange = (e, val) => {
		setPage(val);
	};

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} className="gridCenterItems">
				<Typography paragraph>
					<strong>{user.login}'s recent Repositories:</strong>
				</Typography>
				<List>
					{repoItems.map((repo) => (
						<Fragment key={repo.id}>
							<ListItem
								secondaryAction={
									<Fragment>
										{repo.homepage && (
											<Link
												href={repo.homepage}
												underline="none"
											>
												<Tooltip title="View Homepage">
													<IconButton>
														<Icons.Link />
													</IconButton>
												</Tooltip>
											</Link>
										)}
										<Link
											href={repo.html_url}
											underline="none"
										>
											<Tooltip title="View Repository">
												<IconButton>
													<Icons.View />
												</IconButton>
											</Tooltip>
										</Link>
									</Fragment>
								}
							>
								<Grid item xs={10}>
									<ListItemText
										primary={
											<Fragment>
												<Typography variant="h6">
													{repo.name}
												</Typography>

												<Typography
													variant="caption"
													component="pre"
												>
													Updated:{" "}
													{new Date(
														repo.updated_at
													).toLocaleDateString()}
												</Typography>
												{repo.language && (
													<Typography variant="caption">
														Language:{" "}
														{repo.language}
													</Typography>
												)}
											</Fragment>
										}
										secondary={
											<Fragment>
												<Typography variant="subtitle3">
													{repo.description &&
													repo.description.length >
														300
														? repo.description.slice(
																0,
																300
														  ) + "..."
														: repo.description}
												</Typography>
											</Fragment>
										}
									/>
								</Grid>
							</ListItem>
							<Divider />
						</Fragment>
					))}
				</List>

				{repos.length > 5 && (
					<div className="repoPagination">
						<Pagination
							count={pages}
							page={page}
							onChange={handleChange}
						/>
					</div>
				)}
			</Grid>
		</Grid>
	);
};

RepoCard.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoCard;
