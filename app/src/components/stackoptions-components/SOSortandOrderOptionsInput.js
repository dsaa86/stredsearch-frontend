import {
	generateFormattedIdentifier,
	prettifyString,
} from "../functions/GenericFunctions";

export default function SOSortandOrderOptionsInput({
	identifier,
	value,
	handleChange,
	disabled,
	options,
	additionalOptions = null,
}) {
	let formattedIdentifier = generateFormattedIdentifier(identifier);

	return (
		<div
			id={`${identifier}-label-and-select-container`}
			className="col-sm-6 col-12"
		>
			<div className="row">
				<div
					id={`${identifier}-label-container`}
					className="col-sm-6 col-12"
				>
					<label
						id={`${identifier}-label`}
						htmlFor={identifier}
						className=""
					>
						{formattedIdentifier}
					</label>
				</div>
				<div
					id={`${identifier}-select-container`}
					className="col-sm-6 col-12"
				>
					<select
						id={identifier}
						className="col"
						value={value}
						onChange={handleChange}
						disabled={!disabled}
					>
						{options.map((option, index) => {
							return (
								<option
									value={option}
									key={index}
								>
									{additionalOptions !== null
										? prettifyString(
												additionalOptions[index],
										  )
										: prettifyString(option)}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
}
