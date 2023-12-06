export default function LogoutButton({ loginStatus, setLoginStatus }) {
	return (
		loginStatus && (
			<div id="logout-button-div">
				<button
					type="button"
					className="btn btn-primary"
					id="logout-button"
					onClick={() => {
						setLoginStatus(false);
						sessionStorage.removeItem("token");
						sessionStorage.removeItem("user_name");
						window.location.reload();
					}}
				>
					Logout
				</button>
			</div>
		)
	);
}
