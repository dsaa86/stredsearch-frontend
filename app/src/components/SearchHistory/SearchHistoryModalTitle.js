import SearchOptionsHeader from "../generic-components/search-options-header";

export default function SearchHistoryModalTitle() {
	return (
		<div
			className="row"
			id="search-history-top-row"
		>
			<div className="col-12">
				<div style={{ marginBottom: "20px" }}>
					<SearchOptionsHeader
						title={"Search History"}
						headerType={1}
					/>
				</div>
			</div>
		</div>
	);
}
