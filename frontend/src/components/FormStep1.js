import React from "react"
import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"

export default function FormStep1({ initialValues }) {
	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			<div className='fieldItem'>
				<Field
					name='firstName'
					label='First Name'
					placeholder='Enter First Name'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='lastName'
					label='Last Name'
					placeholder='Enter Last Name'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='email'
					label='Email'
					placeholder='Enter Email'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					type='number'
					name='age'
					label='Age'
					placeholder='Enter Age'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='company'
					label='Company'
					placeholder='Enter Company'
					component={TextField}
				/>
			</div>
		</div>
	)
}
