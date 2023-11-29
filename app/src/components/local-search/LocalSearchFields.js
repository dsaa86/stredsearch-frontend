import { useEffect, useState } from "react";

export default function LocalSearchFields({
	localSearchButtonHandler,
	setSearchBoxValue,
}) {
	let stackCancelTokenSource;
	let redditCancelTokenSource;

	const handleChangeQuery = (event) => {
		setSearchBoxValue(event.target.value);
	};

	return (
		<>
			<div className="row">
				<div className="col-12">
					<input
						type="text"
						placeholder="Search..."
						className="col-12"
						onChange={handleChangeQuery}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<button
						className="col-12 btn btn-primary"
						type="button"
						onClick={localSearchButtonHandler}
					>
						Search
					</button>
				</div>
			</div>
		</>
	);
}