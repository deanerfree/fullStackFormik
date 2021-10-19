import React from "react"
import FormSuccess from "./FormSuccess"
import FormFailure from "./FormFailure"

export default function FormResult({ props }) {
	const { responseData } = props
	console.log(responseData)
	return responseData.data.code !== 200 ? (
		<FormFailure props={responseData} />
	) : (
		<FormSuccess props={responseData} />
	)
}
