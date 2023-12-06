import validationData from "./ValidationData";
import validateFormSubmission from "../LoginUserAdditionalFunctions/ValidateFormSubmission";

const validateUserRegistrationForm = (useRegisterForm) => {
	const validatedFormSubmission = validateFormSubmission(
		validationData(useRegisterForm),
	);

	// user needs to update their information in the form
	if (!validatedFormSubmission.valid) {
		useRegisterForm.setFormInvalid(validatedFormSubmission);
		return false;
	}

	return true;
};

export default validateUserRegistrationForm;
