import React from "react"
import FormSuccess from "./FormSuccess"
import FormFailure from "./FormFailure"

export default function FormResult({ props }) {
	const { responseData } = props
	return responseData.status !== 200 ? (
		<FormFailure props={responseData} />
	) : (
		<FormSuccess props={responseData} />
	)
}
