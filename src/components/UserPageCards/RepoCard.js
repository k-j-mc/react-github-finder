import React, { Fragment, useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import {
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Pagination,
	Typography,
} from "@mui/material";

const RepoCard = (props) => {
	const { repos } = props;

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
					<strong>Repos:</strong>
				</Typography>
				<List>
					{repos.length && (
						<>
							{repoItems.map((repo) => (
								<Fragment key={repo.id}>
									<ListItem>
										<ListItemText primary={repo.name} />
									</ListItem>
									<Divider />
								</Fragment>
							))}
						</>
					)}
				</List>
				{repos.map((repo) => console.log(repo.name))}

				{repos.length > 5 && (
					<Pagination
						count={pages}
						page={page}
						onChange={handleChange}
					/>
				)}
			</Grid>
		</Grid>
	);
};

RepoCard.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoCard;
