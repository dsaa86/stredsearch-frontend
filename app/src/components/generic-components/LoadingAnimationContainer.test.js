import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingAnimationContainer from "./LoadingAnimationContainer";

jest.mock("react-lottie", () => {
	return function DummyLottie() {
		return <div></div>;
	};
});

test("renders LoadingAnimationContainer component", () => {
	render(<LoadingAnimationContainer title={"Test Heading"} />);
	const titleElement = screen.getByText(/Test Heading/i);
	expect(titleElement).toBeInTheDocument();
	expect(titleElement.nodeName).toBe("H3");
});
