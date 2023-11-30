import "./StackOptionsStyle.css";

export default function SOAcceptedAnswerOptions({
	identifier,
	formattedIdentifier,
	disabledState,
	onChangeHandler,
}) {
	return (
		<div
			id={`${identifier}-input-container`}
			className="col-12 col-sm-12 col-md-6"
		>
			<div
				id={`${identifier}-input-row`}
				className="row"
			>
				<div
					id={`${identifier}-input-label-col`}
					className="col-2"
				>
					<label
						id={`${identifier}-input-label`}
						htmlFor={`${identifier}-input`}
						className="col"
					>
						{formattedIdentifier}
					</label>
				</div>
				<div
					id={`${identifier}-input-col`}
					className="col-10"
				>
					<input
						type="checkbox"
						id={`${identifier}-input`}
						name={`${identifier}-input`}
						value="accepted"
						className="col"
						onChange={onChangeHandler}
						disabled={!disabledState}
					/>
				</div>
			</div>
		</div>
	);
}
