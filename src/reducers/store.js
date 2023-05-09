import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import usersReducer from "./usersSlice";
import singleUserReducer from "./singleUserSlice";
import notificationsReducer from "./notificationsSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		users: usersReducer,
		singleUser: singleUserReducer,
		notifications: notificationsReducer,
	},
});
