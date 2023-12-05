import TitleAndData from "./StackQuestionTitleAndDataComponent";

export default function StackQuestionUserContainer({ username, userId }) {
	return (
		<div className="container stack-question-response-user-container">
			<div className="row">
				<div className="col-12 col-sm-6">
					<TitleAndData
						title={"User Name:"}
						data={username}
					/>
				</div>
				<div className="col-12 col-sm-6">
					<TitleAndData
						title={"User Id:"}
						data={userId}
					/>
				</div>
			</div>
		</div>
	);
}
