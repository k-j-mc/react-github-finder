import React, { useState, useEffect } from "react";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { getUsers } from "./reducers/usersSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";

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
		if (status === "succeeded") {
			setTimeout(() => {
				setLoading(false);
			}, 500);
		} else {
			console.log(error);
		}
	}, [status]);

	const theme = createTheme(themeData);

	const handleSearch = () => {
		dispatch(getUsers(searchQuery));
		setSearchQuery("");
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
				<NavBar />

				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					handleSearch={handleSearch}
				/>

				<Users users={data} loading={loading} />
			</ThemeProvider>
		</SnackbarProvider>
	);
};

export default App;
