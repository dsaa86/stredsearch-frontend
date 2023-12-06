import UseRegisterForm from "../custom-hooks/RegisterForm/UseRegisterForm";
import registerUser from "../functions/RegisterUser";
import FormAlertContainer from "./FormAlertContainer";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function RegisterForm({
	setLoginStatus,
	setShowRegisterForm,
	userDetails,
	setUserDetails,
}) {
	const useRegisterForm = UseRegisterForm(
		setLoginStatus,
		setShowRegisterForm,
		userDetails,
		setUserDetails,
	);

	let registerCancelToken;
	let loginCancelToken;

	const registerFormSubmitHandler = () => {
		registerUser(useRegisterForm, registerCancelToken, loginCancelToken);
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
					formState={useRegisterForm.formState}
					setFormState={useRegisterForm.setFormState}
				/>
				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Email:"}
					type={"email"}
					id={"register_email"}
					name={"register_email"}
					formState={useRegisterForm.formState}
					setFormState={useRegisterForm.setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Password:"}
					type={"password"}
					id={"register_password"}
					name={"register_password"}
					formState={useRegisterForm.formState}
					setFormState={useRegisterForm.setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Confirm Password:"}
					type={"password"}
					id={"register_password_confirm"}
					name={"register_password_confirm"}
					formState={useRegisterForm.formState}
					setFormState={useRegisterForm.setFormState}
				/>
				<FormButton
					divclass={"register-form-block row"}
					buttonclass={"col-12 btn btn-primary"}
					label={"Register"}
					id={"register-submit-button"}
					onClick={registerFormSubmitHandler}
				/>

				<FormAlertContainer
					formInvalid={useRegisterForm.formInvalid}
					errorsRendered={useRegisterForm.errorsRendered}
					setErrorsRendered={useRegisterForm.setErrorsRendered}
				/>
			</form>
		</div>
	);
}
