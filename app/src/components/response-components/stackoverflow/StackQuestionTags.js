export default function StackQuestionTags({ tags }) {
	const tag_list = tags.split(", ");
	const tag_list_length = tag_list.length;
	const tag_element_width = Math.floor(12 / tag_list_length) >= 3 ? 3 : 2;

	return (
		<div className="row">
			<div className="container">
				<div className="row stack-response-question-tags-container">
					{tag_list.map((tag, index) => {
						return (
							<div
								className={`col-${tag_element_width} stack-response-question-tag`}
								key={index}
							>
								<span className="stack-response-question-tag-span">
									{tag}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
