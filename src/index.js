import React from "react";
import ReactDOM from "react-dom/client";

import GithubState from "./context/github/githubState";
import ThemeState from "./context/theme/themeState";
import NotificationState from "./context/notifications/notificationState";

import "./styling/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GithubState>
			<ThemeState>
				<NotificationState>
					<App />
				</NotificationState>
			</ThemeState>
		</GithubState>
	</React.StrictMode>
);
