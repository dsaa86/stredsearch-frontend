import { useEffect } from "react";
import showSearchHistory from "../functions/SearchHistoryFunctions";

export default function GreetingContainer({
	loginStatus,
	userDetails,
	authController,
}) {
	useEffect(() => {}, [loginStatus, userDetails]);

	const showSearchHistoryHandler = () => {
		showSearchHistory(authController);
	};

	return (
		userDetails && (
			<>
				<div id="greeting-container">
					<h4 id="greeting">
						Welcome, {sessionStorage.getItem("user_name")}
					</h4>
				</div>
				<div id="login-button-div">
					<button
						type="button"
						className="btn btn-secondary"
						id="login-button"
						onClick={showSearchHistoryHandler}
					>
						View Search History
					</button>
				</div>
			</>
		)
	);
}
