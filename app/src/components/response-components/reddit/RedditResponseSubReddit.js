export default function RedditResponseSubreddits({ subreddit }) {
	return (
		<div className="row">
			<div className="container">
				<div className="row reddit-response-question-subreddit-container">
					<div className="col-3 reddit-response-question-subreddit">
						<span className="reddit-response-question-tag-span">
							{subreddit}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
