import "../SearchAppComponentsStyle.css";
import SearchOptionsHeader from "../generic-components/search-options-header";

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
						localStorage.removeItem("token");
						window.location.reload();
					}}
				>
					Logout
				</button>
			</div>
		)
	);
}
