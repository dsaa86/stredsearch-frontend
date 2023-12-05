import { generateFormattedIdentifier } from "../functions/GenericFunctions";

export default function SOPageOptionsInput({
	identifier,
	min,
	onChangeFunction,
	disabledOption,
	defaultValue,
	max = null,
}) {
	const inputProps = {
		className: "col-12",
		id: `${identifier}-input`,
		name: `${identifier}-input`,
		min: min,
		type: "number",
		onChange: onChangeFunction,
		disabled: !disabledOption,
		defaultValue: defaultValue,
	};

	if (max !== null) {
		inputProps.max = max;
	}

	const identifierFormatted = generateFormattedIdentifier(identifier);

	return (
		<div
			id={`${identifier}-label-and-input-container`}
			className="col-sm-6 col-12"
		>
			<div className="row">
				<div
					id={`${identifier}-label-container`}
					className="col-sm-6 col-12"
				>
					<label
						id={`${identifier}-label`}
						htmlFor={`${identifier}-input`}
						className=""
					>
						{identifierFormatted}
					</label>
				</div>
				<div
					id={`${identifier}-input-container`}
					className="col-sm-6 col-12"
				>
					<input {...inputProps} />
				</div>
			</div>
		</div>
	);
}
