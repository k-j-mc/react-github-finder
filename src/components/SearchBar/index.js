import React, { useContext, useState } from "react";

import GithubContext from "../../context/github/githubContext";

import { Button, Grid, IconButton, TextField } from "@mui/material";

import Icons from "../Icons";

const SearchBar = () => {
	const githubContext = useContext(GithubContext);

	const [searchQuery, setSearchQuery] = useState(githubContext.searchQuery);

	const handleSearch = () => {
		githubContext.searchUsers(searchQuery);
	};

	const clearSearch = () => {
		setSearchQuery("");
		githubContext.clearUsers();
	};

	return (
		<Grid container spacing={2} className="searchGrid">
			<Grid item xs={1} />
			<Grid item xs={8} sm={9}>
				<TextField
					placeholder="Search Users..."
					value={searchQuery}
					className="inputRounded"
					fullWidth
					autoComplete="off"
					onChange={(e) => setSearchQuery(e.target.value)}
					InputProps={{
						endAdornment: (
							<>
								{searchQuery && (
									<IconButton onClick={clearSearch}>
										<Icons.Close />
									</IconButton>
								)}
							</>
						),
					}}
				/>
			</Grid>
			<Grid item xs={2} sm={1}>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSearch}
					className="searchButton"
				>
					<Icons.Search />
				</Button>
			</Grid>
			<Grid item xs={1} />
		</Grid>
	);
};

export default SearchBar;
