import SearchOptionsHeader from "../../generic-components/search-options-header";

export default function ResponseTitle({ engine, title, link }) {
	return (
		<div
			id={`${engine}-response-question-title-container`}
			className="row"
		>
			<div
				id={`${engine}-response-question-title-row`}
				className="col-12 stack-response-question-title"
			>
				<a
					id={`${engine}-response-question-title-link`}
					className={`${engine}-response-question-title-link`}
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
