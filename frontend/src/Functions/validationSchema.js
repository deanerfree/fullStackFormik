import * as Yup from "yup"

export const validation = [
	Yup.object({
		firstName: Yup.string()
			.required("Required")
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
		email: Yup.string("@")
			.min(3, "must contain at least 3 characters")
			.max(40, "Max 40 characters")
			.required("Valid email is required"),
		lastName: Yup.string()
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
		age: Yup.string(),
		// .required("Must be a number")
		// .max(3, "less than 2 characters"),
		company: Yup.string(),
		// .min(3, "must contain at least 3 characters")
		// .max(20, "Max 20 characters"),
	}),
	Yup.object({
		address1: Yup.string()
			.required("Required")
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
		address2: Yup.string()
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
		city: Yup.string()
			.required("Required")
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
		province: Yup.string()
			.required("Required")
			.min(2, "must contain at least 2 characters")
			.max(20, "Max 20 characters"),
		postalcode: Yup.string()
			.required("Required")
			.min(3, "must contain at least 3 characters")
			.max(20, "Max 20 characters"),
	}),
]
