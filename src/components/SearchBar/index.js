import React from "react";

import { Button, Grid, IconButton, TextField } from "@mui/material";

import Icons from "../Icons";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
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
								{searchQuery !== "" && (
									<IconButton
										onClick={() => setSearchQuery("")}
									>
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
