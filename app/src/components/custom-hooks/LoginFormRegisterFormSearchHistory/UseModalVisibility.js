import { useEffect } from "react";
import { handleClickOutsideModal } from "../../functions/GenericFunctions";

const UseModalVisibility = (setShow, identifier) => {
	const clickHandler = (event) => {
		if (event.target.id !== identifier) {
			return;
		}
		handleClickOutsideModal(event, setShow);
	};

	useEffect(() => {
		const element = document.getElementById(identifier);
		if (!element) {
			return;
		}
		element.addEventListener("click", clickHandler);

		return () => {
			element.removeEventListener("click", clickHandler);
		};
	}, []);

	return {};
};

export default UseModalVisibility;
