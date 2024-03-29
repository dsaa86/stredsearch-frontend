// TODO: Responsive size of container needs to be adjusted for side-by-side results

export default function StackQuestionAnswerAccepted({ accepted }) {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div
						className={`col-12 ${
							accepted === true
								? "stack-question-accepted"
								: "stack-question-not-accepted"
						}`}
					>
						{accepted === true
							? "Accepted Answer"
							: "No Accepted Answer"}
					</div>
				</div>
			</div>
		</>
	);
}
