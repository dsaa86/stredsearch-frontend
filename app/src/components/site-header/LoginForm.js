import "../SearchAppComponentsStyle.css";

export default function LoginForm({ setLoginStatus }) {
	return (
		<div id="login-form-div">
			<form
				id="login-form"
				className="container"
			>
				<div className="login-form-block row">
					<label
						for="login-username"
						className="col-xlg-2 col-md-3 col-sm-4 col-12"
					>
						Username:
					</label>
					<input
						type="text"
						id="login-username"
						name="login-username"
						className="col-xlg-10 col-md-9 col-sm-8 col-12"
					/>
				</div>

				<div className="login-form-block row">
					<label
						for="login-password"
						className="col-xlg-2 col-md-3 col-sm-4 col-12"
					>
						Password:
					</label>
					<input
						type="password"
						id="login-password"
						name="login-password"
						className="col-xlg-10 col-md-9 col-sm-8 col-12"
					/>
				</div>

				<div className="login-form-block row">
					<input
						type="submit"
						value="Login"
						className="col-12 btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
}
