import "../SearchAppComponentsStyle.css";

export default function FormAlert({ message, index }) {
	return (
		<div
			className="alert alert-danger col-12"
			role="alert"
			key={index}
		>
			{message}
		</div>
	);
}
