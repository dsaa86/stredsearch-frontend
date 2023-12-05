import LoadingAnimation from "./LoadingAnimation";
import SearchOptionsHeader from "./search-options-header";

export default function LoadingAnimationContainer({ title }) {
	return (
		<div className="col-sm-12 col-xl-6 stack-search-results-container">
			<div className="row">
				<div className="col-12">
					<SearchOptionsHeader title={title} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<LoadingAnimation />
				</div>
			</div>
		</div>
	);
}
