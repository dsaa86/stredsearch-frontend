import { render, screen } from "@testing-library/react";
import React from "react";
import TitleAndData from "./StackQuestionTitleAndData";

test("renders title and date with simple string", () => {
	const title = "Title";
	const data = "Data";

	render(
		<TitleAndData
			title={title}
			data={data}
		/>,
	);

	const titleElement = screen.getByText(title);
	const dataElement = screen.getByText(data);
	expect(titleElement).toBeInTheDocument();
	expect(dataElement).toBeInTheDocument();
});

test("renders title and date with date string", () => {
	const title = "Title";
	const date = "2023-12-25";

	render(
		<TitleAndData
			title={title}
			data={date}
			isDate={true}
		/>,
	);

	const titleElement = screen.getByText(title);
	const dateElement = screen.getByText("25/12/2023");
	expect(titleElement).toBeInTheDocument();
	expect(dateElement).toBeInTheDocument();
});

test("renders title and date with total-answers testid", () => {
	const title = "Title";
	const data = "Data";

	render(
		<TitleAndData
			title={title}
			data={data}
			isTotalAnswers={true}
		/>,
	);

	const titleElement = screen.getByText(title);
	const dataElement = screen.getByText(data);
	const scoreElement = screen.getByTestId("total-answers");
	expect(titleElement).toBeInTheDocument();
	expect(dataElement).toBeInTheDocument();
	expect(scoreElement).toBeInTheDocument();
});

test("renders title and date with score testid", () => {
	const title = "Title";
	const data = "Data";

	render(
		<TitleAndData
			title={title}
			data={data}
			isScore={true}
		/>,
	);

	const titleElement = screen.getByText(title);
	const dataElement = screen.getByText(data);
	const scoreElement = screen.getByTestId("score");
	expect(titleElement).toBeInTheDocument();
	expect(dataElement).toBeInTheDocument();
	expect(scoreElement).toBeInTheDocument();
});
