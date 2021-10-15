import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"

export default function FormStep1({ initialValues }) {
	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			<Field
				className='fieldItem'
				name='firstName'
				label='First Name'
				placeholder='Enter First Name'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='lastName'
				label='Last Name'
				placeholder='Enter Last Name'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='email'
				label='Email'
				placeholder='Enter Email'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				type='number'
				name='age'
				label='Age'
				placeholder='Enter Age'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='company'
				label='Company'
				placeholder='Enter Company'
				component={TextField}
			/>
		</div>
	)
}
