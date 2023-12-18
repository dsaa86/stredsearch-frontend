import { render, screen } from "@testing-library/react";
import React from "react";
import StackQuestionAnswerAccepted from "./StackQuestionAnswerAccepted";

test("renders stack question answer accepted", () => {
	const accepted = true;
	render(<StackQuestionAnswerAccepted accepted={accepted} />);

	const answerAccepted = screen.getByText(/^Accepted Answer$/i);
	expect(answerAccepted).toBeInTheDocument();
});

test("renders stack question answer not accepted", () => {
	const accepted = false;
	render(<StackQuestionAnswerAccepted accepted={accepted} />);

	const answerNotAccepted = screen.getByText(/^No Accepted Answer$/i);
	expect(answerNotAccepted).toBeInTheDocument();
});
