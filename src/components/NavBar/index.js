import React, { useState } from "react";
import PropTypes from "prop-types";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material/";

import NavMenu from "./NavMenu";

import Icons from "../Icons";

const NavBar = ({ title }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const openMenu = Boolean(anchorEl);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" className="appBar">
				<Toolbar>
					<Icons.GitHub className="appIcon" />
					<Typography variant="h5" color="white">
						{title}
					</Typography>
					<IconButton
						onClick={handleOpenMenu}
						style={{ marginLeft: "auto" }}
					>
						{openMenu === false ? (
							<Icons.Menu className="menuIcon" />
						) : (
							<Icons.Close className="menuIcon" />
						)}
					</IconButton>
					<NavMenu
						openMenu={openMenu}
						anchorEl={anchorEl}
						setAnchorEl={setAnchorEl}
					/>
				</Toolbar>
			</AppBar>
			<div className="appBarShadow" />
		</Box>
	);
};

NavBar.defaultProps = {
	title: "Github Finder",
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NavBar;
