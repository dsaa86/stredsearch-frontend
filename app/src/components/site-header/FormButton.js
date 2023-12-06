export default function RegisterForm({
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
			>
				{label}
			</button>
		</div>
	);
}
