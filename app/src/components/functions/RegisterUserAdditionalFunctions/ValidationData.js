const validationData = (useRegisterForm) => {
	return [
		{
			type: "simple",
			input: useRegisterForm.formState.register_username.length,
			operator: "<",
			value: 3,
			errorKey: "username_minlength",
			errorMessage: "Username must be at least 3 characters long.",
		},
		{
			type: "simple",
			input: useRegisterForm.formState.register_username.length,
			operator: ">",
			value: 20,
			errorKey: "username_maxlength",
			errorMessage: "Username must not be more than 20 characters long.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_username,
			regexp: /^[a-zA-Z0-9]+$/,
			errorKey: "username_format",
			errorMessage: "Username can only contain letters and numbers.",
		},
		{
			type: "includes",
			input: useRegisterForm.formState.register_email,
			includes: "@",
			errorKey: "email_atpresent",
			errorMessage: "Email must contain an @ sign.",
		},
		{
			type: "includes",
			input: useRegisterForm.formState.register_email,
			includes: ["@", "."],
			errorKey: "email_domainpresent",
			errorMessage: "Email must contain a domain.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_email.split("@")[0],
			regexp: /^[a-zA-Z0-9]+$/,
			errorKey: "email_usernameformat",
			errorMessage:
				"Email username can only contain letters and numbers.",
		},
		{
			type: "simple",
			input: useRegisterForm.formState.register_password.length,
			operator: "<",
			value: 8,
			errorKey: "password_minlength",
			errorMessage: "Password must be at least 8 characters long.",
		},
		{
			type: "simple",
			input: useRegisterForm.formState.register_password.length,
			operator: ">",
			value: 30,
			errorKey: "password_maxlength",
			errorMessage: "Password must be less than 30 characters long.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_password,
			regexp: /^[a-zA-Z0-9_!£$%^&*(){}:;@~'#<>?,.]*$/,
			errorKey: "password_format",
			errorMessage:
				"Password can only contain letters, numbers and the following special characters: _!£$%^&*(){}:;@~'#<>?,.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_password,
			regexp: /[A-Z]/,
			errorKey: "password_uppercase",
			errorMessage: "Password must contain at least one uppercase.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_password,
			regexp: /[a-z]/,
			errorKey: "password_lowercase",
			errorMessage: "Password must contain at least one lowercase.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_password,
			regexp: /[0-9]/,
			errorKey: "password_number",
			errorMessage: "Password must contain at least one number.",
		},
		{
			type: "regexp",
			input: useRegisterForm.formState.register_password,
			regexp: /[_!£$%^&*(){}:;@~'#<>?,.]/,
			errorKey: "password_special",
			errorMessage:
				"Password must contain at least one special character.",
		},
		{
			type: "simple",
			input: useRegisterForm.formState.register_password,
			operator: "!=",
			value: useRegisterForm.formState.register_password_confirm,
			errorKey: "password_match",
			errorMessage: "Passwords do not match.",
		},
	];
};

export default validationData;
