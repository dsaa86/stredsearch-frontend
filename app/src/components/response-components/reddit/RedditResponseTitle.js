import "../../SearchAppComponentsStyle.css";

import SearchOptionsHeader from "../../generic-components/search-options-header";

export default function RedditResponseTitle({ title, link }) {
	return (
		<div className="row">
			<div className="col-12 stack-response-question-title">
				<a
					className="stack-response-question-title-link"
					href={link}
					target="_blank"
				>
					<SearchOptionsHeader
						title={title}
						headerType={4}
					/>
				</a>
			</div>
		</div>
	);
}
