import React, { useContext } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { SnackbarProvider } from "notistack";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeContext from "./context/theme/themeContext";

import Notifications from "./components/Notifications";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

import Icons from "./components/Icons";

const App = () => {
	const themeContext = useContext(ThemeContext);

	const { theme } = themeContext;

	const themeData = createTheme(theme);

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
				<ThemeProvider theme={themeData}>
					<CssBaseline />
					<Notifications />
					<NavBar />

					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route
							exact
							path="/user/:login"
							element={<UserPage />}
						/>

						<Route
							path="*"
							element={
								<ErrorPage
									message="Page not found"
									icon={
										<Icons.WrongLocation className="noResultIcon" />
									}
								/>
							}
						/>
					</Routes>
				</ThemeProvider>
			</SnackbarProvider>
		</BrowserRouter>
	);
};

export default App;
