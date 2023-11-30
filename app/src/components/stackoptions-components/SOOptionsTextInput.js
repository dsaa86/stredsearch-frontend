import "./StackOptionsStyle.css";

export default function SOOptionsTextInput({
	soSearchData,
	setSoSearchData,
	changeIdentifier,
	disabledStatus,
	identifier,
	identifierLabel,
}) {
	const handleChange = (e) => {
		setSoSearchData({
			...soSearchData,
			[changeIdentifier]: e.target.value,
		});
	};

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
					{identifierLabel}
				</label>
			</div>
			<div
				id={`${identifier}-input-col`}
				className="col-sm-9 col-12"
			>
				<input
					type="text"
					id={`${identifier}-input`}
					name={`${identifier}-input-row`}
					className="col"
					onChange={handleChange}
					disabled={!disabledStatus}
				/>
			</div>
		</div>
	);
}
