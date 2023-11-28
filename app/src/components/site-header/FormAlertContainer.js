import { useEffect } from "react";
import "../SearchAppComponentsStyle.css";
import FormAlert from "./FormAlert";

export default function FormAlertContainer({
	formInvalid,
	errorsRendered,
	setErrorsRendered,
}) {
	useEffect(() => {
		if (errorsRendered < formInvalid.attempt) {
			document.getElementById("form-alert-row").innerHTML = "";
			setErrorsRendered(errorsRendered + 1);
		}
	}, [formInvalid]);
	return (
		<div
			id="form-alert-container"
			className="container form-alert-container"
			key={formInvalid.attempt}
		>
			<div
				id="form-alert-row"
				className="row"
			>
				{!formInvalid.valid &&
					Object.values(formInvalid.error).map((error, index) => (
						<FormAlert
							message={error}
							index={index}
						/>
					))}
			</div>
		</div>
	);
}
