import React, { Fragment } from "react";

import SearchBar from "../components/SearchBar";
import Users from "../components/Users";

const HomePage = ({
	data,
	clearUsers,
	handleSearch,
	loading,
	searchQuery,
	setSearchQuery,
}) => {
	return (
		<Fragment>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={handleSearch}
				clearUsers={clearUsers}
			/>
			<Users users={data} loading={loading} />
		</Fragment>
	);
};

export default HomePage;
