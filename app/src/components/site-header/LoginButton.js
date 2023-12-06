export default function LoginButton({ loginStatus, setShowLoginForm }) {
	return (
		!loginStatus && (
			<div id="login-button-div">
				<button
					type="button"
					class="btn btn-primary"
					id="login-button"
					onClick={() => setShowLoginForm(true)}
				>
					Login
				</button>
			</div>
		)
	);
}
