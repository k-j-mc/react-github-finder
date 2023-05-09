import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { sendNotification } from "./reducers/notificationsSlice";

import { getUsers } from "./reducers/usersSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Notifications from "./components/Notifications";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";
import NoUser from "./components/Users/NoUser";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);
	const { data, status, error } = useSelector((state) => state.users);

	const [loading, setLoading] = useState(true);

	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		dispatch(getTheme());
		dispatch(getUsers());
	}, []);

	useEffect(() => {
		setLoading(true);

		if (status === "succeeded") {
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
		if (data.message) {
			dispatch(
				sendNotification({ message: data.message, variant: "error" })
			);
		}
	}, [status, data]);

	const theme = createTheme(themeData);

	const handleSearch = () => {
		dispatch(getUsers(searchQuery));
	};

	const clearUsers = () => {
		setSearchQuery("");
		setLoading(true);
		dispatch(getUsers());
	};

	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
			autoHideDuration={2000}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Notifications />
				<NavBar />

				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					handleSearch={handleSearch}
					clearUsers={clearUsers}
				/>
				{data.length > 0 ? (
					<Users users={data} loading={loading} />
				) : (
					<NoUser />
				)}
			</ThemeProvider>
		</SnackbarProvider>
	);
};

App.defaultProps = {
	searchQuery: "",
	loading: true,
};

App.propTypes = {
	searchQuery: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default App;
