import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { sendNotification } from "./reducers/notificationsSlice";

import { getUsers } from "./reducers/usersSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Notifications from "./components/Notifications";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

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
		<BrowserRouter>
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

					<Routes>
						<Route
							exact
							path="/"
							element={
								<HomePage
									data={data}
									clearUsers={clearUsers}
									handleSearch={handleSearch}
									loading={loading}
									searchQuery={searchQuery}
									setSearchQuery={setSearchQuery}
								/>
							}
						/>
						<Route exact path="/about" element={<AboutPage />} />
						<Route
							exact
							path="/user/:name"
							element={<UserPage />}
						/>

						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</ThemeProvider>
			</SnackbarProvider>
		</BrowserRouter>
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
