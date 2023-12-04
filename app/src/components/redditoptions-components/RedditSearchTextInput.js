import { generateFormattedIdentifier } from "../functions/GenericFunctions";
export default function RedditSearchTextInput({
	identifier,
	handleInputChange,
}) {
	const formattedIdentifier = generateFormattedIdentifier(identifier);

	return (
		<div
			id={`${identifier}-input-row`}
			className="row"
		>
			<div
				id={`${identifier}-input-label-col`}
				className="col-sm-3 col-12"
			>
				<label
					id={`${identifier}-input-label`}
					htmlFor={`${identifier}-input`}
				>
					{formattedIdentifier}
				</label>
			</div>
			<div
				id={`${identifier}-input-col`}
				className="col-sm-9 col-12"
			>
				<input
					type="text"
					id={`${identifier}-input`}
					name={`${identifier}-input`}
					className="col"
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
}
