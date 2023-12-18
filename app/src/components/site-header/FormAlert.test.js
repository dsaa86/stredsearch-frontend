import { render, screen } from "@testing-library/react";
import React from "react";
import FormAlert from "./FormAlert";

test("Tests button and greeting container with no user login", () => {
	const message = "Test Message";
	const index = "Test Index";
	render(
		<FormAlert
			message={message}
			index={index}
		/>,
	);

	const messageElement = screen.getByText(message);

	expect(messageElement).toBeInTheDocument();
});
