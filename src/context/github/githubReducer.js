import {
	GET_DEFAULT_USERS,
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
} from "../types";

const githubReducer = (state, action) => {
	switch (action.type) {
		case GET_DEFAULT_USERS:
			return {
				...state,
				users: action.payload,
				searchQuery: action.searchQuery,
				loading: action.loading,
				error: action.error,
			};

		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				searchQuery: action.searchQuery,
				loading: action.loading,
				error: action.error,
			};

		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};

		case CLEAR_USERS:
			return {
				...state,
				users: [],
				searchQuery: "",
				loading: false,
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default githubReducer;
