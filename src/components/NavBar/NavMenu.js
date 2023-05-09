import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getTheme } from "../../reducers/themeSlice";

import { Link } from "react-router-dom";

import { Divider, Menu, MenuItem } from "@mui/material";

import Icons from "../Icons";

const NavMenu = (props) => {
	const dispatch = useDispatch();

	const { anchorEl, setAnchorEl, openMenu } = props;

	const [theme, setTheme] = useState("Light");

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleTheme = () => {
		setTheme((prevMode) => (prevMode === "Light" ? "Dark" : "Light"));
		dispatch(getTheme(theme));
		handleCloseMenu();
	};

	return (
		<Menu
			anchorEl={anchorEl}
			open={openMenu}
			onClose={handleCloseMenu}
			className="menu"
		>
			<Link to={"/"} className="menuLink">
				<MenuItem onClick={handleTheme} className="menuItem">
					<Icons.Home className="menuItemIcon" />
					Home
				</MenuItem>
			</Link>
			<Divider />

			<Link to={"/about"} className="menuLink">
				<MenuItem onClick={handleTheme} className="menuItem">
					<Icons.About className="menuItemIcon" />
					About
				</MenuItem>
			</Link>
			<Divider />

			<MenuItem onClick={handleTheme} className="menuItem">
				{theme === "Dark" ? (
					<Icons.DarkMode className="menuItemIcon" />
				) : (
					<Icons.LightMode className="menuItemIcon" />
				)}
				{theme} theme
			</MenuItem>
		</Menu>
	);
};

export default NavMenu;
