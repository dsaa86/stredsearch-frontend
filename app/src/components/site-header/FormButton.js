export default function FormButton({
	divclass,
	buttonclass,
	label,
	id,
	onClick,
}) {
	return (
		<div className={divclass}>
			<button
				type="button"
				className={buttonclass}
				onClick={onClick}
				id={id}
				data-testid="form-button"
			>
				{label}
			</button>
		</div>
	);
}
