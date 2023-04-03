enum ErrorMessage {
	notSame = "Password and Confirm Password is required to be same.",
	required = "You can't leave it empty.",
	length = "Password should contain atleast 8 charcter",
	capital = "Password should contain at least one capital letter",
	small = "Password should contain at least one small letter",
	digit = "Password should contain at least one number",
}
function usePasswordValidation() {
	return (value: string, confirm?: string) => {
		if (value.trim() === "") {
			return ErrorMessage.required;
		}
		if (confirm && value != confirm) {
			return ErrorMessage.notSame;
		}
		if (value.length < 8) {
			return ErrorMessage.length;
		}
		if (!value.match(/[A-Z]/)) {
			return ErrorMessage.capital;
		}
		if (!value.match(/[a-z]/)) {
			return ErrorMessage.small;
		}
		if (!value.match(/[0-9]/)) {
			return ErrorMessage.digit;
		}
		return null;
	};
}

export default usePasswordValidation;
