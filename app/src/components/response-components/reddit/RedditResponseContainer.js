import ResponseTitle from "../ResponseTitle";
import RedditResponseSubReddit from "../reddit/RedditResponseSubReddit";

export default function RedditResponseContainer({ question }) {
	const subreddit = question.question_link
		.replace("https://www.reddit.com/r/", "")
		.split("/")[0];

	return (
		<div
			id=""
			className="container reddit-response-container"
		>
			<ResponseTitle
				engine={"reddit"}
				title={question.question_title}
				link={question.question_link}
			/>
			<RedditResponseSubReddit subreddit={subreddit} />
		</div>
	);
}
