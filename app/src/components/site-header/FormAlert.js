export default function FormAlert({ message, index }) {
	return (
		<div
			className="alert alert-danger col-12"
			role="alert"
			key={index}
			data-testid="form-alert"
		>
			{message}
		</div>
	);
}
