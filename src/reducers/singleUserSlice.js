import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api.github.com/";
const API = `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const singleUser = createAsyncThunk("singleUser", async (e) => {
	const response = await axios
		.get(URL + "users/" + e + API)
		.then((response) => response.data)
		.catch((error) => error);

	return response;
});

export const singleUserSlice = createSlice({
	name: "singleUser",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(singleUser.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(singleUser.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "succeeded";
		});

		builder.addCase(singleUser.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default singleUserSlice.reducer;
