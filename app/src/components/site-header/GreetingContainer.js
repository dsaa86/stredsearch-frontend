import { useEffect } from "react";

export default function GreetingContainer({ loginStatus, userDetails }) {
	useEffect(() => {}, [loginStatus, userDetails]);

	return (
		userDetails && (
			<div id="greeting-container">
				<h4 id="greeting">
					Welcome, {sessionStorage.getItem("user_name")}
				</h4>
			</div>
		)
	);
}
