import { useEffect, useState } from "react";

export default function Input({
	divclass,
	labelclass,
	inputclass,
	label,
	type,
	id,
	name,
	formState,
	setFormState,
}) {
	const [inputValue, setInputValue] = useState(formState);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	useEffect(() => {
		setFormState({
			...formState,
			[name]: inputValue,
		});
	}, [inputValue]);

	return (
		<div className={divclass}>
			<label
				for={id}
				className={labelclass}
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				className={inputclass}
				value={formState.name}
				onChange={handleInputChange}
			/>
		</div>
	);
}
