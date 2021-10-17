export const keyNameCorrector = (value) => {
	if (value) {
		if (value === "firstName") {
			value = "First Name"
		}
		if (value === "lastName") {
			value = "Last Name"
		}
		if (value === "email") {
			value = "Email"
		}
		if (value === "age") {
			value = "Age"
		}
		if (value === "company") {
			value = "Company"
		}
		if (value === "address1") {
			value = "Address 1"
		}
		if (value === "address2") {
			value = "Address 2"
		}
		if (value === "city") {
			value = "City"
		}
		if (value === "province") {
			value = "Province"
		}
		if (value === "postalcode") {
			value = "Postal Code"
		}
	}
	return value
}
