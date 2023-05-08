import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import UserItem from "./components/Users/UserItem";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);

	useEffect(() => {
		dispatch(getTheme());
	}, []);

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

				<NavBar title="Github Finder" />
				<Grid container spacing={2} className="cardGrid">
					<Grid item xs={10} md={4} lg={2}>
						<UserItem />
					</Grid>
				</Grid>
			</ThemeProvider>
		</SnackbarProvider>
	);
};

export default App;
