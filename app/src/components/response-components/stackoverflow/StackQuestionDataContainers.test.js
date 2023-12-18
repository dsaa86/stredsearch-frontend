import { render, screen } from "@testing-library/react";
import React from "react";
import StackQuestionUserContainer from "./StackQuestionUserContainer";
import StackQuestionAnswerData from "./StackQuestionActivityContainer";
import StackQuestionMetaDataContainer from "./StackQuestionMetaDataContainer";

test("renders stack question activity data and tests child components are rendered with date data", () => {
	const created = "2022-09-10";
	const lastActivity = "2023-07-08";
	render(
		<StackQuestionAnswerData
			created={created}
			lastActivity={lastActivity}
		/>,
	);

	const createdRender = screen.getByText(/10\/9\/2022/i);
	const lastActivityRender = screen.getByText(/8\/7\/2023/i);
	expect(createdRender).toBeInTheDocument();
	expect(lastActivityRender).toBeInTheDocument();
});

test("renders stack question user data and tests child components are rendered with string data", () => {
	const username = "test-username";
	const userId = "0123456789";
	render(
		<StackQuestionUserContainer
			username={username}
			userId={userId}
		/>,
	);

	const usernameRender = screen.getByText(/test-username/i);
	const userIdRender = screen.getByText(/0123456789/i);
	expect(usernameRender).toBeInTheDocument();
	expect(userIdRender).toBeInTheDocument();
});

test("renders stack question meta data and tests child components are rendered with string and date data, ACCEPTED ANSWER IS TRUE", () => {
	const username = "test-username";
	const userId = "0123456789";
	const accepted = true;
	const answers = "20";
	const score = "10";
	const created = "2000-09-10";
	const lastActivity = "2001-07-08";

	render(
		<StackQuestionMetaDataContainer
			username={username}
			userId={userId}
			accepted={accepted}
			answers={answers}
			score={score}
			created={created}
			lastActivity={lastActivity}
		/>,
	);
	const usernameRender = screen.getByText(/test-username/i);
	const userIdRender = screen.getByText(/0123456789/i);
	const createdRender = screen.getByText(/10\/9\/2000/i);
	const lastActivityRender = screen.getByText(/8\/7\/2001/i);
	const acceptedRender = screen.getByText(/^Accepted Answer$/i);
	const answersRenderPresent = screen.getByTestId("total-answers");
	const scoreRenderPresent = screen.getByTestId("score");

	let answersRender = "";
	let scoreRender = "";

	if (answersRenderPresent !== null) {
		answersRender = screen.getByTestId("total-answers");
	}

	if (scoreRenderPresent !== null) {
		scoreRender = screen.getByTestId("score");
	}

	expect(usernameRender).toBeInTheDocument();
	expect(userIdRender).toBeInTheDocument();
	expect(createdRender).toBeInTheDocument();
	expect(lastActivityRender).toBeInTheDocument();
	expect(acceptedRender).toBeInTheDocument();
	if (answersRender !== "") {
		expect(answersRender).toHaveTextContent("20");
	}
	if (scoreRender !== "") {
		expect(scoreRender).toHaveTextContent("10");
	}
});

test("renders stack question meta data and tests child components are rendered with string and date data, ACCEPTED ANSWER IS FALSE", () => {
	const username = "test-username";
	const userId = "0123456789";
	const accepted = false;
	const answers = "20";
	const score = "10";
	const created = "2022-09-10";
	const lastActivity = "2023-07-08";
	render(
		<StackQuestionMetaDataContainer
			username={username}
			userId={userId}
			accepted={accepted}
			answers={answers}
			score={score}
			created={created}
			lastActivity={lastActivity}
		/>,
	);
	const usernameRender = screen.getByText(/test-username/i);
	const userIdRender = screen.getByText(/0123456789/i);
	const createdRender = screen.getByText(/10\/9\/2022/i);
	const lastActivityRender = screen.getByText(/8\/7\/2023/i);
	const acceptedRender = screen.getByText(/^No Accepted Answer$/i);
	const answersRenderPresent = screen.queryByTestId("total-answers");
	const scoreRenderPresent = screen.queryByTestId("score");

	let answersRender = "";
	let scoreRender = "";

	if (answersRenderPresent !== null) {
		answersRender = screen.getByTestId("total-answers");
	}

	if (scoreRenderPresent !== null) {
		scoreRender = screen.getByTestId("score");
	}

	expect(usernameRender).toBeInTheDocument();
	expect(userIdRender).toBeInTheDocument();
	expect(createdRender).toBeInTheDocument();
	expect(lastActivityRender).toBeInTheDocument();
	expect(acceptedRender).toBeInTheDocument();
	if (answersRender !== "") {
		expect(answersRender).toHaveTextContent("20");
	}
	if (scoreRender !== "") {
		expect(scoreRender).toHaveTextContent("10");
	}
});
