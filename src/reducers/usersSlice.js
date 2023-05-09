import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api.github.com/";
const API = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const getUsers = createAsyncThunk("getUsers", async (e) => {
	let API_URL = "";

	if (e) {
		API_URL = URL + "search/users?q=" + e + "&" + API;
	} else {
		API_URL = URL + "users?" + API;
	}

	const response = await axios
		.get(API_URL)
		.then((response) => (e ? response.data.items : response.data))
		.catch((error) => error);

	return response;
});

export const usersSlice = createSlice({
	name: "getUsers",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "succeeded";
		});

		builder.addCase(getUsers.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default usersSlice.reducer;
