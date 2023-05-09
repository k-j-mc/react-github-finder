import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const getUsers = createAsyncThunk("getUsers", async () => {
	const response = await axios
		.get("https://api.github.com/users")
		.then((response) => response.data)
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
