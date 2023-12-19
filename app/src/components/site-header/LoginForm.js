import FormAlertContainer from "./FormAlertContainer";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import SearchOptionsHeader from "../generic-components/search-options-header";

import UseLoginForm from "../custom-hooks/LoginForm/UseLoginForm";
import UseModalVisibility from "../custom-hooks/LoginFormRegisterFormSearchHistory/UseModalVisibility";
import loginUser from "../functions/LoginUser";

export default function LoginForm({
	setLoginStatus,
	setShowLoginForm,
	userDetails,
	setUserDetails,
}) {
	let loginCancelToken;

	const useLoginForm = UseLoginForm(
		setLoginStatus,
		setShowLoginForm,
		userDetails,
		setUserDetails,
	);

	const loginFormSubmitHandler = () => {
		loginUser(
			loginCancelToken,
			useLoginForm.formState.login_username,
			useLoginForm.formState.login_password,
			useLoginForm.setLoginStatus,
			useLoginForm.setShowLoginForm,
			useLoginForm.setUserDetails,
			useLoginForm.setFormInvalid,
		);
	};

	const useModalVisibility = UseModalVisibility(
		setShowLoginForm,
		"login-form-div",
	);

	return (
		<div id="login-form-div">
			<form
				id="login-form"
				className="container"
			>
				<SearchOptionsHeader title={"Login User"} />
				<FormInput
					divclass={"login-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Username:"}
					type={"text"}
					id={"login_username"}
					name={"login_username"}
					formState={useLoginForm.formState}
					setFormState={useLoginForm.setFormState}
				/>
				<FormInput
					divclass={"login-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Password:"}
					type={"password"}
					id={"login_password"}
					name={"login_password"}
					formState={useLoginForm.formState}
					setFormState={useLoginForm.setFormState}
				/>
				<FormButton
					divclass={"login-form-block row"}
					buttonclass={"col-12 btn btn-primary"}
					label={"Login"}
					id={"login-submit-button"}
					onClick={loginFormSubmitHandler}
				/>

				<FormAlertContainer
					formInvalid={useLoginForm.formInvalid}
					errorsRendered={useLoginForm.errorsRendered}
					setErrorsRendered={useLoginForm.setErrorsRendered}
				/>
			</form>
		</div>
	);
}
