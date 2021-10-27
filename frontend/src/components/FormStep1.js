import React from "react"
import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"

export default function FormStep1() {
	const listFieldItems = [
		{
			type: "text",
			name: "firstName",
			label: "First Name",
			placeholder: "Enter First Name",
		},
		{
			type: "text",
			name: "lastName",
			label: "Last Name",
			placeholder: "Enter Last Name",
		},
		{
			type: "text",
			name: "email",
			label: "Email",
			placeholder: "Enter Email",
		},
		{
			type: "number",
			name: "age",
			label: "Age",
			placeholder: "Enter Age",
		},
		{
			type: "text",
			name: "company",
			label: "Company",
			placeholder: "Enter Company",
		},
	]

	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			{listFieldItems.map((fieldItem, index) => {
				return (
					<div className='fieldItem' key={index}>
						<Field
							type={fieldItem.type}
							name={fieldItem.name}
							label={fieldItem.label}
							placeholder={fieldItem.placeholder}
							component={TextField}
							style={{ width: "15rem" }}
						/>
					</div>
				)
			})}
		</div>
	)
}
