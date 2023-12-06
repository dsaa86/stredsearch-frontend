export default function RegisterButton({ loginStatus, setShowRegisterForm }) {
	return (
		!loginStatus && (
			<div id="register-button-div">
				<button
					type="button"
					class="btn btn-primary"
					id="register-button"
					onClick={() => setShowRegisterForm(true)}
				>
					Register
				</button>
			</div>
		)
	);
}
