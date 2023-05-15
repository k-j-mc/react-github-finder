import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
	GET_DEFAULT_USERS,
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
} from "../types";

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		searchQuery: "",
		loading: false,
		error: null,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	let loading = true;
	let error = null;

	const getDefaultUsers = async () => {
		setLoading();

		const response = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		if (response.data.length > 0) {
			loading = false;
		} else {
			loading = false;
			error = "No users found";
		}

		dispatch({
			type: GET_DEFAULT_USERS,
			payload: response.data,
			error: error,
			loading: loading,
		});
	};

	const searchUsers = async (searchQuery) => {
		setLoading();

		if (searchQuery === "") {
			getDefaultUsers();
		} else {
			const response = await axios.get(
				`https://api.github.com/search/users?q=${searchQuery}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);

			if (response.data.items.length > 0) {
				loading = false;
			} else {
				loading = false;
				error = "No users found";
			}

			dispatch({
				type: SEARCH_USERS,
				payload: response.data.items,
				searchQuery: searchQuery,
				error: error,
				loading: loading,
			});
		}
	};

	const getUser = async (username) => {
		setLoading();

		const response = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		const responseRepos = await axios.get(
			`https://api.github.com/users/${username}/repos?sort=created:asc?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		if (response.data.login) {
			loading = false;
		} else {
			loading = false;
			error = "No user data";
		}

		dispatch({
			type: GET_USER,
			payload: { ...response.data, repos: responseRepos.data },
			error: error,
			loading: loading,
		});
	};

	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
		getDefaultUsers();
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				searchQuery: state.searchQuery,
				loading: state.loading,
				error: state.error,
				getDefaultUsers,
				searchUsers,
				clearUsers,
				getUser,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
