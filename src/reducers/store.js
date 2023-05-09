import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import usersReducer from "./usersSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		users: usersReducer,
	},
});
