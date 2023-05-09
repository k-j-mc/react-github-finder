import React, { forwardRef } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DoneIcon from "@mui/icons-material/Done";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";

const Icons = {
	Back: forwardRef((props, ref) => (
		<ArrowBackIosNewIcon {...props} ref={ref} />
	)),
	Close: forwardRef((props, ref) => <CloseIcon {...props} ref={ref} />),
	DarkMode: forwardRef((props, ref) => <DarkModeIcon {...props} ref={ref} />),
	Down: forwardRef((props, ref) => (
		<KeyboardArrowDownIcon {...props} ref={ref} />
	)),
	Download: forwardRef((props, ref) => <DownloadIcon {...props} ref={ref} />),
	ExpandMore: forwardRef((props, ref) => (
		<ExpandMoreIcon {...props} ref={ref} />
	)),
	False: forwardRef((props, ref) => (
		<CloseIcon {...props} ref={ref} style={{ color: "#ef5350" }} />
	)),

	Favorite: forwardRef((props, ref) => <FavoriteIcon {...props} ref={ref} />),
	GitHub: forwardRef((props, ref) => <GitHubIcon {...props} ref={ref} />),
	Home: forwardRef((props, ref) => <HomeIcon {...props} ref={ref} />),
	About: forwardRef((props, ref) => <InfoIcon {...props} ref={ref} />),
	LightMode: forwardRef((props, ref) => <LightModeIcon {...props} />),
	Menu: forwardRef((props, ref) => <MenuIcon {...props} ref={ref} />),
	MoreVert: forwardRef((props, ref) => <MoreVertIcon {...props} ref={ref} />),
	Search: forwardRef((props, ref) => (
		<Search {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	Seen: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />),
	Sad: forwardRef((props, ref) => (
		<SentimentDissatisfiedIcon {...props} ref={ref} />
	)),
	Share: forwardRef((props, ref) => (
		<ShareIcon {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	True: forwardRef((props, ref) => (
		<DoneIcon {...props} ref={ref} style={{ color: "#4caf50" }} />
	)),
	Up: forwardRef((props, ref) => (
		<KeyboardArrowUpIcon {...props} ref={ref} />
	)),
	WrongLocation: forwardRef((props, ref) => (
		<WrongLocationIcon {...props} ref={ref} />
	)),
};

export default Icons;
