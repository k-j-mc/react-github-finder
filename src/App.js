import React, { useState, useEffect } from "react";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { getUsers } from "./reducers/usersSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import Users from "./components/Users";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);
	const { data, status, error } = useSelector((state) => state.users);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(getTheme());
		dispatch(getUsers());
	}, []);

	useEffect(() => {
		if (status === "succeeded") {
			setLoading(false);
		} else {
			console.log(error);
		}
	}, [status]);

	const theme = createTheme(themeData);

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

				{loading ? <Loader /> : <Users users={data} />}
			</ThemeProvider>
		</SnackbarProvider>
	);
};

export default App;
