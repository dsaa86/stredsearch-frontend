import { useEffect, useState } from "react";

// import './stackoptions-components/StackOptionsStyle.css';
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import SODateOptions from "./stackoptions-components/SODateOptions";
import SOOptionsTextInput from "./stackoptions-components/SOOptionsTextInput";
import SOPageOptions from "./stackoptions-components/SOPageOptions";
import SORouteSelect from "./stackoptions-components/SORouteSelect";
import SOSortandOrderOptions from "./stackoptions-components/SOSortandOrderOptions";
import SOTickBoxOptionsContainer from "./stackoptions-components/SOTickBoxOptionsContainer";

const fieldStatus = {
	question_by_tag: {
		page_number: true,
		page_size: true,
		from_date: true,
		to_date: true,
		resultsSort: true,
		order: true,
		tagged: true,
		nottagged: false,
		intitle: false,
		user: false,
		query: false,
		body: false,
		accepted: false,
		closed: false,
		migrated: false,
		wiki: false,
	},
	related_questions: {
		page_number: true,
		page_size: true,
		from_date: true,
		to_date: true,
		resultsSort: true,
		order: true,
		tagged: false,
		nottagged: false,
		intitle: false,
		user: false,
		query: true,
		body: false,
		accepted: false,
		closed: false,
		migrated: false,
		wiki: false,
	},
	search: {
		page_number: true,
		page_size: true,
		from_date: true,
		to_date: true,
		resultsSort: true,
		order: true,
		tagged: true,
		nottagged: true,
		intitle: true,
		user: false,
		query: false,
		body: false,
		accepted: false,
		closed: false,
		migrated: false,
		wiki: false,
	},
	advanced_search: {
		page_number: true,
		page_size: true,
		from_date: true,
		to_date: true,
		resultsSort: true,
		order: true,
		tagged: true,
		nottagged: true,
		intitle: true,
		user: true,
		query: true,
		body: true,
		accepted: true,
		closed: true,
		migrated: true,
		wiki: true,
	},
};

export default function StackOptions({
	soSearchData,
	setSoSearchData,
	searchButtonActive,
}) {
	const [soFieldStatus, setSoFieldStatus] = useState(
		fieldStatus.advanced_search,
	);

	useEffect(() => {}, [searchButtonActive]);

	return (
		<div
			className="container stack-options-container"
			style={
				searchButtonActive === false
					? { pointerEvents: "none" }
					: { pointerEvents: "auto" }
			}
		>
			<SearchOptionsHeader title={"Stack Overflow Search Options"} />
			<SORouteSelect
				fieldStatus={fieldStatus}
				setSoFieldStatus={setSoFieldStatus}
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
			/>
			<SOPageOptions
				soFieldStatus={soFieldStatus}
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
			/>
			<SODateOptions
				soFieldStatus={soFieldStatus}
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
			/>
			<SOSortandOrderOptions
				soFieldStatus={soFieldStatus}
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"tagged"}
				disabledStatus={soFieldStatus.tagged}
				identifier={"so-tag"}
				identifierLabel={"Question Tags"}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"nottagged"}
				disabledStatus={soFieldStatus.nottagged}
				identifier={"so-not-tagged"}
				identifierLabel={"Question Not Tagged"}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"intitle"}
				disabledStatus={soFieldStatus.intitle}
				identifier={"so-in-title"}
				identifierLabel={"In Title"}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"user"}
				disabledStatus={soFieldStatus.user}
				identifier={"so-user"}
				identifierLabel={"User"}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"query"}
				disabledStatus={soFieldStatus.query}
				identifier={"so-query"}
				identifierLabel={"Query"}
			/>
			<SOOptionsTextInput
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
				changeIdentifier={"body"}
				disabledStatus={soFieldStatus.body}
				identifier={"so-body"}
				identifierLabel={"Body"}
			/>
			<SOTickBoxOptionsContainer
				soFieldStatus={soFieldStatus}
				soSearchData={soSearchData}
				setSoSearchData={setSoSearchData}
			/>
		</div>
	);
}
