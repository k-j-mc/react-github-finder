import React, { Fragment } from "react";

import SearchBar from "../components/SearchBar";
import Users from "../components/Users";

const HomePage = () => {
	return (
		<Fragment>
			<SearchBar />
			<Users />
		</Fragment>
	);
};

export default HomePage;
