export default function SoRedditPickerInput({
	identifier,
	formattedIdentifier,
	checkedState,
	changeHandler,
}) {
	return (
		<div
			id={`${identifier}-checkbox-row`}
			className="row"
		>
			<div
				id={`${identifier}-checkbox-label-col`}
				className="col-4 col-md-3 col-lg-2"
			>
				<label
					id={`${identifier}-checkbox-label`}
					htmlFor={`${identifier}-checkbox`}
				>
					{formattedIdentifier}
				</label>
			</div>
			<div
				id={`${identifier}-checkbox-row`}
				className="col-8 col-md-9 col-lg-10"
			>
				<input
					type="checkbox"
					id={`${identifier}-checkbox`}
					name={`${identifier}-checkbox`}
					checked={checkedState}
					onChange={changeHandler}
				/>
			</div>
		</div>
	);
}
