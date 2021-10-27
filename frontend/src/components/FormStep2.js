import React from "react"
import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"
export default function FormStep2() {
	const listFieldItems = [
		{
			type: "text",
			name: "address1",
			label: "Address 1",
			placeholder: "Enter Address 1",
		},
		{
			type: "text",
			name: "address2",
			label: "Address 2",
			placeholder: "Enter Address 2",
		},
		{
			type: "text",
			name: "city",
			label: "City",
			placeholder: "Enter City",
		},
		{
			type: "text",
			name: "province",
			label: "Province",
			placeholder: "Enter Province",
		},
		{
			type: "text",
			name: "postalcode",
			label: "Postal Code",
			placeholder: "Enter Postal Code",
		},
	]
	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			{listFieldItems.map((fieldItem, index) => {
				return (
					<div className='fieldItem' key={index}>
						<Field
							name={fieldItem.name}
							label={fieldItem.label}
							placeholder={fieldItem.placeholder}
							component={TextField}
							style={{ width: "15rem" }}
						/>
					</div>
				)
			})}
			{/* <Field
					name='address1'
					label='Address 1'
					placeholder='Enter Address 1'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='address2'
					label='Address 2'
					placeholder='Enter Address 2'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='city'
					label='City'
					placeholder='Enter a City'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='province'
					label='Province'
					placeholder='Enter a province'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='postalcode'
					label='Postal Code'
					placeholder='Enter Postal Code'
					component={TextField}
				/>
			</div> */}
		</div>
	)
}
