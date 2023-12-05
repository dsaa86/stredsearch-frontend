import { generateFormattedIdentifier } from "../functions/GenericFunctions";

export default function SODateOptionInput({
	identifier,
	onChangeHandler,
	disabledStatus,
	defaultValue,
}) {
	const formattedIdentifier = generateFormattedIdentifier(identifier);

	return (
		<div
			id={`${identifier}-label-and-input-container`}
			className="col-md-6 col-sm-12 col-12"
		>
			<div className="row">
				<div
					id={`${identifier}-label-container`}
					className="col-md-6 col-sm-12 col-12"
				>
					<label
						id={`${identifier}-input-label`}
						htmlFor={`${identifier}-input`}
						className=""
					>
						{formattedIdentifier}
					</label>
				</div>
				<div
					id={`${identifier}-input-container`}
					className="col-md-6 col-sm-12 col-12"
				>
					<input
						id={`${identifier}-input`}
						name={`${identifier}-input`}
						className="col-12"
						type="date"
						placeholder={formattedIdentifier}
						onChange={onChangeHandler}
						disabled={!disabledStatus}
						defaultValue={defaultValue}
					/>
				</div>
			</div>
		</div>
	);
}
