import { useState } from "react";
import "../SearchAppComponentsStyle.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function RegisterForm({ setLoginStatus }) {
	const [formState, setFormState] = useState({
		register_username: "",
		register_email: "",
		register_password: "",
		register_password_confirm: "",
	});

	const registerFormSubmit = () => {
		console.log(formState);
	};

	return (
		<div id="register-form-div">
			<form
				id="register-form"
				className="container"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Username:"}
					type={"text"}
					id={"register_username"}
					name={"register_username"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Email:"}
					type={"email"}
					id={"register_email"}
					name={"register_email"}
					formState={formState}
					setFormState={setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Password:"}
					type={"password"}
					id={"register_password"}
					name={"register_password"}
					formState={formState}
					setFormState={setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Confirm Password:"}
					type={"password"}
					id={"register_password_confirm"}
					name={"register_password_confirm"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormButton
					divclass={"register-form-block row"}
					buttonclass={"col-12 btn btn-primary"}
					label={"Register"}
					id={"register-submit-button"}
					onClick={registerFormSubmit}
				/>
			</form>
		</div>
	);
}
