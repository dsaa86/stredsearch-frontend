import SoRedditPickerInput from "./SORedditPickerInput";
import "./SearchAppComponentsStyle.css";

export default function SoRedditPicker({
	showSO,
	showReddit,
	soCheckHandler,
	redditCheckHandler,
}) {
	return (
		<div className="row">
			<div className="container so-reddit-picker">
				<SoRedditPickerInput
					identifier={"so"}
					formattedIdentifier={"Stack Overflow"}
					checkedState={showSO}
					changeHandler={soCheckHandler}
				/>
				<SoRedditPickerInput
					identifier={"reddit"}
					formattedIdentifier={"Reddit"}
					checkedState={showReddit}
					changeHandler={redditCheckHandler}
				/>
			</div>
		</div>
	);
}
