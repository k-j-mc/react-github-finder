import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import usersReducer from "./usersSlice";
import notificationsReducer from "./notificationsSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		users: usersReducer,
		notifications: notificationsReducer,
	},
});
