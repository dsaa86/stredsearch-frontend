import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import LocalSearchFields from "./local-search/LocalSearchFields";

export default function LocalSearch() {
	const [soLocalSearchData, setSoLocalSearchData] = useState({});
	const [redditLocalSearchData, setRedditLocalSearchData] = useState({});
	const [searchBoxValue, setSearchBoxValue] = useState("");

	const localSearchButtonHandler = () => {
		
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<SearchOptionsHeader
						title={"Search Cached Data"}
						headerType={1}
					/>
				</div>
			</div>
			<LocalSearchFields
				localSearchButtonHandler={localSearchButtonHandler}
				setSearchBoxValue={setSearchBoxValue}
			/>
		</div>
	);
}
